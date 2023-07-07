import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/button";
import {
  InputListPartPost,
  InputPartPost,
} from "../inputPartPost/InputPartPost";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FSNarrowSpline from "../SVGwithInputs/FSNarrowSpline";
import FSLargeSpline from "../SVGwithInputs/FSLargeSpline";

import Swal from "sweetalert2";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";
import {
  frontSprocketLargeSplineSchema,
  frontSprocketNarrowSplineSchema,
  generateSchema,
  makesOptions,
  partsOptions,
} from "@/utils";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

const PostForm = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  const [partSchema, setPartSchema] = useState<any>(
    frontSprocketNarrowSplineSchema
  );

  const completeSchema = generateSchema(partSchema);

  interface partPostProps {
    [key: string]: string;
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(completeSchema),
    mode: "all",
    defaultValues: {
      make: makesOptions[0].displayName,
    },
  });
  const { dispatch: selectedPartDispatch } = useContext(SelectedPartContext);

  const [selectedPart, setSelectedPart] = useState(
    possibleParts.FSNarrowSpline
  );

  const handleChangePart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const part = e.target.value as possibleParts;
    setSelectedPart(part);
    selectedPartDispatch({ type: "CHANGE_FRONTSPROCKET", payload: part });
  };

  const { dispatch: sharedValueDispatch, state: sharedValueState } =
    useContext(SharedValuesContext);
  const { fsNarrowSpline, fsLargeSpline } = sharedValueState;

  const [partToShow, setPartToShow] = useState({
    make: fsNarrowSpline.make,
    code: fsNarrowSpline.code,
    link: fsNarrowSpline.link,
  });

  const { dispatch: EditingModeDispatch, state: editingModeState } =
    useContext(EditingModeContext);

  const { editingMode, id, part } = editingModeState;

  const onSubmit = async (data: partPostProps) => {
    if (editingModeState.editingMode) {
      try {
        const resp = await fetch(`/api/parts/${part}/${id}`, {
          method: "PUT",
          body: JSON.stringify({ ...data }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        EditingModeDispatch({
          type: "EDIT_MODE",
          payload: false,
        });

        if (resp.ok) {
          Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          }).fire({
            icon: "success",
            title: "Edition completed!",
          });
          sharedValueDispatch({
            type: "",
            group: "RESET_VALUES",
            payload: "",
          });
          reset();
        } else if (resp.status === 409) {
          const errorData = await resp.json();

          throw new Error(errorData.message);
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      try {
        const resp = await fetch(`/api/parts/${selectedPart}`, {
          method: "POST",
          body: JSON.stringify({
            ...data,
          }),
        });

        if (resp.ok) {
          sharedValueDispatch({
            type: "",
            group: "RESET_VALUES",
            payload: "",
          });
          Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          }).fire({
            icon: "success",
            title: "New part added",
          });

          reset();
        } else if (resp.status === 409) {
          const errorData = await resp.json();

          throw new Error(errorData.message);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    const setPartData = () => {
      switch (selectedPart) {
        case possibleParts.FSNarrowSpline:
          setPartSchema(frontSprocketNarrowSplineSchema);
          setPartToShow({
            make: fsNarrowSpline.make,
            code: fsNarrowSpline.code,
            link: fsNarrowSpline.link,
          });
          break;
        case possibleParts.FSLargeSpline:
          setPartSchema(frontSprocketLargeSplineSchema);
          setPartToShow({
            make: fsLargeSpline.make,
            code: fsLargeSpline.code,
            link: fsLargeSpline.link,
          });
          break;
        default:
          break;
      }
    };
    setPartData();
  }, [fsLargeSpline, fsNarrowSpline, selectedPart]);

  const DisplaySVG = () => {
    switch (selectedPart) {
      case possibleParts.FSNarrowSpline:
        return (
          <FSNarrowSpline
            control={control}
            errors={errors}
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        );
      case possibleParts.FSLargeSpline:
        return (
          <FSLargeSpline
            control={control}
            errors={errors}
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center justify-center">
      {editingMode && (
        <h3 className="mb-5 text-2xl font-bold text-white">Editing mode</h3>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-0 flex flex-col justify-center gap-10 px-4 mobile:px-0"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex flex-1 flex-col gap-3 px-4 laptop:px-0 ">
            <InputListPartPost
              onChange={handleChangePart}
              id="bikePart"
              label="Part"
              placeholder="Front Sprocket"
              optionsArray={partsOptions}
            />

            <Controller
              control={control}
              name="make"
              render={({ field: { onChange, value } }) => (
                <InputListPartPost
                  onChange={(value) => {
                    onChange(value);
                    console.log(value);

                    sharedValueDispatch({
                      type: "SET_DATA",
                      payload: {
                        make: value.target.value,
                      },
                      group: "FSNarrowSpline",
                    });
                  }}
                  id="makes"
                  label="Make"
                  optionsArray={makesOptions}
                  value={partToShow.make}
                />
              )}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 px-4 laptop:px-0 ">
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange, value } }) => (
                <InputPartPost
                  name="code"
                  onChange={(value) => {
                    onChange(value);
                    sharedValueDispatch({
                      type: "SET_DATA",
                      payload: {
                        code: value.target.value,
                      },
                      group: "FSNarrowSpline",
                    });
                  }}
                  value={partToShow.code}
                  placeholder="31435"
                  id="code"
                  label="Code"
                  error={errors?.code?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="link"
              render={({ field: { onChange, value } }) => (
                <InputPartPost
                  name="link"
                  onChange={(value) => {
                    onChange(value);
                    sharedValueDispatch({
                      type: "SET_DATA",
                      payload: {
                        code: value.target.value,
                      },
                      group: "FSNarrowSpline",
                    });
                  }}
                  value={partToShow.link}
                  placeholder="www.sizematch.com"
                  id="link"
                  label="Link"
                  type="url"
                  error={errors?.link?.message?.toString()}
                />
              )}
            />
          </div>
        </div>
        {DisplaySVG()}
        <div className="flex justify-center gap-4">
          <Button type="submit" text={editingMode ? "Edit" : "Send"} />
          <Button
            type="button"
            text={editingMode ? "Cancel" : "Reset"}
            onClick={() => {
              sharedValueDispatch({
                type: "",
                group: "RESET_VALUES",
                payload: "",
              });

              reset();

              EditingModeDispatch({
                type: "EDIT_MODE",
                payload: false,
                id: undefined,
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
