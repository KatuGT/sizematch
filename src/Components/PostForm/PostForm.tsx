import React, { useEffect, useState } from "react";
import { Button } from "../Button/button";
import {
  InputListPartPost,
  InputPartPost,
} from "../inputPartPost/InputPartPost";
import { FSSizeInput, InputItemFS } from "@/utils/FSInputData";
import { RSSizeInput } from "@/utils/RSInputData";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FSNarrowSpline from "../SVGwithInputs/FSNarrowSpline";
import FSLargeSpline from "../SVGwithInputs/FSLargeSpline";
import { frontSprocketNarrowSplineSchema } from "@/utils/yupSchemas/FSNarrowSpline";
import { frontSprocketLargeSplineSchema } from "@/utils/yupSchemas/FSLargeSpline";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { partsOptions } from "@/utils/SelectListOptions/parts";
import { makesOptions } from "@/utils/SelectListOptions/makes";

interface FormProps {
  handleFSChange: React.ChangeEventHandler<HTMLInputElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  handleHover: React.MouseEventHandler<HTMLDivElement>;
}

const PostForm = ({ handleHover, handleMouseLeave }: FormProps) => {
  const [arratoToMap, setArratoToMap] = useState<any[]>(FSSizeInput);

  const [partSchema, setPartSchema] = useState<any>(
    frontSprocketNarrowSplineSchema
  );

  const commonSchema = {
    make: yup.string().trim().max(20, "Too long").required("Required"),
    code: yup.string().trim().max(20, "Too long").required("Required"),
    link: yup.string().trim().max(150, "Too long").url().required("Required"),
  };

  const generateSchema = (additionalSchema: any) => {
    return yup.object().shape({
      ...commonSchema,
      ...additionalSchema,
    });
  };

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

  const [duplicatedPartError, setDuplicatedPartError] = useState();

  const [selectedPart, setSelectedPart] = useState(
    possibleParts.FSNarrowSpline
  );

  const onSubmit = async (data: partPostProps) => {
    try {
      const resp = await fetch(`/api/parts/${selectedPart}`, {
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
      });

      if (resp.ok) {
        reset();
      } else if (resp.status === 409) {
        const errorData = await resp.json();
        setDuplicatedPartError(errorData.message);

        throw new Error(errorData.message);
      }
    } catch (err) {
      console.log(err);
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
        return <FSNarrowSpline control={control} errors={errors} />;
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
        className="flex flex-col  justify-center gap-10"
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
        {duplicatedPartError && (
          <span className="text-red-700">{duplicatedPartError}</span>
        )}
      </form>
    </div>
  );
};

export default PostForm;
