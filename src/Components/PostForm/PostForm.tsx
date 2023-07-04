import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/button";
import {
  InputListPartPost,
  InputPartPost,
} from "../inputPartPost/InputPartPost";
import { FSSizeInput } from "@/utils/FSInputData";
import { RSSizeInput } from "@/utils/RSInputData";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FSNarrowSpline from "../SVGwithInputs/FSNarrowSpline";
import FSLargeSpline from "../SVGwithInputs/FSLargeSpline";
import { frontSprocketNarrowSplineSchema } from "@/utils/yupSchemas/FSNarrowSpline";
import { frontSprocketLargeSplineSchema } from "@/utils/yupSchemas/FSLargeSpline";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { partsOptions } from "@/utils/SelectListOptions/parts";
import { makesOptions } from "@/utils/SelectListOptions/makes";
import Swal from "sweetalert2";
import { generateSchema } from "@/utils/generateYupSchema";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";

const PostForm = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  const [arratoToMap, setArratoToMap] = useState<any[]>(FSSizeInput);

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
    watch,
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

  const { dispatch } = useContext(SharedValuesContext);

  const onSubmit = async (data: partPostProps) => {
    try {
      const resp = await fetch(`/api/parts/${selectedPart}`, {
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
      });

      if (resp.ok) {
        dispatch({
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
  };

  useEffect(() => {
    const setPartData = () => {
      switch (selectedPart) {
        case possibleParts.FSNarrowSpline:
          setArratoToMap(FSSizeInput);
          setPartSchema(frontSprocketNarrowSplineSchema);
          break;
        case possibleParts.FSLargeSpline:
          setArratoToMap(RSSizeInput);
          setPartSchema(frontSprocketLargeSplineSchema);
          break;
        default:
          setArratoToMap([]);
          break;
      }
    };
    setPartData();
  }, [selectedPart]);

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
        setArratoToMap([]);
        break;
    }
  };

  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-0 flex flex-col justify-center gap-10 px-4 mobile:px-0"
      >
        <div className="flex gap-3 justify-center flex-wrap">
          <div className="flex flex-col gap-3 flex-1 px-4 laptop:px-0 ">
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
                  onChange={onChange}
                  id="makes"
                  label="Make"
                  optionsArray={makesOptions}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-3 flex-1 px-4 laptop:px-0 ">
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange, value } }) => (
                <InputPartPost
                  onChange={onChange}
                  value={value || ""}
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
                  onChange={onChange}
                  value={value || ""}
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
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostForm;
