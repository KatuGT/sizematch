import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/button";
import {
  InputListPartPost,
  InputPartPost,
} from "../inputPartPost/InputPartPost";
import { FSSizeInput, InputItemFS } from "@/utils/FSInputData";
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
import { useHover } from "@/utils/handleHoveredSize";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";

const PostForm = () => {
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

  const [selectedPart, setSelectedPart] = useState(
    possibleParts.FSNarrowSpline
  );

  const { resetValues } = useContext(SharedValuesContext);

  const onSubmit = async (data: partPostProps) => {
    try {
      const resp = await fetch(`/api/parts/${selectedPart}`, {
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
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
          title: "New part added",
        });
        reset();
        resetValues();
      } else if (resp.status === 409) {
        const errorData = await resp.json();

        throw new Error(errorData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { handleHover, handleMouseLeave, hoverClass } = useHover();

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
            hoveredClass={hoverClass}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        );
      case possibleParts.FSLargeSpline:
        return <FSLargeSpline control={control} errors={errors} />;
      default:
        setArratoToMap([]);
        break;
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  justify-center gap-4"
      >
        <div className="flex flex-col gap-3">
          <InputListPartPost
            onChange={(e) => setSelectedPart(e.target.value as possibleParts)}
            id="bikePart"
            label="Choose motorbike part:"
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
        {DisplaySVG()}
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostForm;
