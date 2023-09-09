"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/button";
import { InputList, InputPartPost } from "../inputPartPost/InputPartPost";
import { yupResolver } from "@hookform/resolvers/yup";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";
import {
  brakeDiscSchema,
  connectingRodSchema,
  frontSprocketLargeSplineSchema,
  frontSprocketNarrowSplineSchema,
  rearSprocketSchema,
  pistonKitSchema,
  generateSchema,
  makesOptions,
  partsOptions,
  valveSchema,
} from "@/utils";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useSWRConfig } from "swr";
import { DisplaySVG } from "@/utils/displaySVG";
import { usePart } from "../useSetValueForm";
import handleResponse from "../handleFormResponse";
import { setPartData } from "@/utils/setPartData";

const PostForm = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  const { dispatch: selectedPartDispatch, state: selectedPartState } =
    useContext(SelectedPartContext);
  const { selectedPart } = selectedPartState;

  const { dispatch: sharedValueDispatch, state: sharedValueState } =
    useContext(SharedValuesContext);
  const {
    fsNarrowSpline,
    fsLargeSpline,
    rearSprocket,
    brakeDisc,
    connectingRod,
    pistonKit,
    valve,
  } = sharedValueState;

  const { dispatch: EditingModeDispatch, state: editingModeState } =
    useContext(EditingModeContext);

  const { editingMode, id, part } = editingModeState;

  const [partSchema, setPartSchema] = useState<any>(
    frontSprocketNarrowSplineSchema
  );

  const completeSchema = generateSchema(partSchema);

  interface partPostProps {
    [key: string]: string;
  }

  const [partToUpdate, setPartToUpdate] = useState({
    make: fsNarrowSpline.make,
    code: fsNarrowSpline.code,
    link: fsNarrowSpline.link,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(completeSchema),
    defaultValues: {
      make: partToUpdate.make,
    },
  });

  usePart({ part, setValue });

  const { mutate } = useSWRConfig();
  const [error, setError] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const onSubmit = async (data: partPostProps) => {
    setDisabledButton(true);
    try {
      const resp = await fetch(
        `/api/parts/${editingMode ? `${part}/${id}` : selectedPart}`,
        {
          method: editingMode ? "PUT" : "POST",
          body: JSON.stringify({ ...data }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      await handleResponse(
        resp,
        setDisabledButton,
        setError,
        editingMode,
        EditingModeDispatch,
        sharedValueDispatch,
        reset,
        mutate,
        selectedPart
      );
    } catch (err) {
      setDisabledButton(false);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.warn("Unexpected front error", err);
      }
    }
  };

  const handleChangePart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const part = e.target.value as possibleParts;
    selectedPartDispatch({ type: "CHANGE_SELECTED_PART", payload: part });
  };

  useEffect(() => {
    sharedValueDispatch({
      type: "",
      group: "RESET_VALUES",
      payload: "",
    });
    EditingModeDispatch({
      type: "EDIT_MODE",
      payload: false,
      id: undefined,
      part: undefined,
    });
  }, [EditingModeDispatch, selectedPart, sharedValueDispatch]);

  const [group, setGroup] = useState<possibleParts>(
    possibleParts.FSNarrowSpline
  );

  useEffect(() => {
    const partData = () => {
      setPartData(
        selectedPart,
        setPartSchema,
        setPartToUpdate,
        setGroup,
        possibleParts,
        frontSprocketNarrowSplineSchema,
        fsNarrowSpline,
        frontSprocketLargeSplineSchema,
        fsLargeSpline,
        rearSprocketSchema,
        rearSprocket,
        brakeDiscSchema,
        brakeDisc,
        connectingRodSchema,
        connectingRod,
        pistonKitSchema,
        pistonKit,
        valveSchema,
        valve
      );
    };

    partData();
  }, [
    selectedPart,
    fsLargeSpline,
    fsNarrowSpline,
    rearSprocket,
    brakeDisc,
    connectingRod,
    pistonKit,
    valve,
  ]);

  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center justify-center">
      {editingMode && (
        <h3 className="mb-5 text-2xl font-bold text-white">Editing mode</h3>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-4 my-0 flex flex-col justify-center gap-10 mobile:mx-auto mobile:px-0"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex flex-1 flex-col gap-3 px-4 laptop:px-0 ">
            <InputList
              onChange={handleChangePart}
              id="bikePart"
              label="Part"
              placeholder="Front Sprocket"
              optionsArray={partsOptions}
            />

            <Controller
              control={control}
              name="make"
              render={({ field: { onChange } }) => (
                <InputList
                  onChange={(value) => {
                    onChange(value);

                    sharedValueDispatch({
                      type: "SET_DATA",
                      payload: {
                        make: value.target.value,
                      },
                      group: group,
                    });
                  }}
                  id="makes"
                  label="Make"
                  optionsArray={makesOptions}
                  value={partToUpdate.make || ""}
                  error={errors?.make?.message?.toString()}
                />
              )}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 px-4 laptop:px-0 ">
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange } }) => (
                <InputPartPost
                  name="code"
                  onChange={(value) => {
                    onChange(value);

                    sharedValueDispatch({
                      type: "SET_DATA",
                      payload: {
                        code: value.target.value,
                      },
                      group: group,
                    });
                  }}
                  value={partToUpdate.code || ""}
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
              render={({ field: { onChange } }) => (
                <InputPartPost
                  name="link"
                  onChange={(value) => {
                    onChange(value);
                    sharedValueDispatch({
                      type: "SET_DATA",
                      payload: {
                        link: value.target.value,
                      },
                      group: group,
                    });
                  }}
                  value={partToUpdate.link || ""}
                  placeholder="www.sizematch.net"
                  id="link"
                  label="Link"
                  type="url"
                  error={errors?.link?.message?.toString()}
                />
              )}
            />
          </div>
        </div>
        {
          <DisplaySVG
            part={selectedPart}
            control={control}
            errors={errors}
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        }
        <div className="flex justify-center gap-4">
          <Button
            type="submit"
            text={editingMode ? "Edit" : "Send"}
            disabled={disabledButton}
          />
          <Button
            type="button"
            text={editingMode ? "Cancel" : "Reset"}
            onClick={() => {
              sharedValueDispatch({
                type: "",
                group: "RESET_VALUES",
                payload: "",
              });

              EditingModeDispatch({
                type: "EDIT_MODE",
                payload: false,
                id: undefined,
                part: undefined,
              });
            }}
          />
        </div>
      </form>
      {error && <span className="mt-2 text-red-700">{error}</span>}
    </div>
  );
};

export default PostForm;
