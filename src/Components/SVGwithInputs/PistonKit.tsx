import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import PistonKitFront from "../../../public/svgParts/PistonKitFront";
import PistonKitSide from "../../../public/svgParts/PistonKitSide";
import PistonKitPin from "../../../public/svgParts/PistonKitPin";

interface PistonKitProps extends SVGProps {
  control: any;
  errors: any;
}

const PistonKit = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: PistonKitProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { pistonKit } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.PistonKit,
    });
  };
  return (
    <div>
      <section className="p-2 laptop:p-0">
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Compression Hight (1)"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Pin diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Compression Hight (2)"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeD"
            text="D - Bore"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Length"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeF"
            text="F - Pin length"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="relative flex flex-col items-center justify-center gap-10 mobile:gap-16 laptop:gap-5 desktop:mt-10 desktop:flex-row desktop:gap-4">
        <div className="relative mt-10 w-[200px] mobile:w-[250px] laptop:w-[350px] laptop:items-end desktop:mt-0 desktop:w-[500px]">
          <Controller
            control={control}
            name="a_compressionHight1"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeA"
                name="a_compressionHight1"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={pistonKit.a_compressionHight1 || ""}
                placeholder="22.5"
                position="left-[-34%] top-[21%] mobile:left-[-27%] mobile:top-[22%] laptop:left-[-28%] laptop:top-[23%] desktop:left-[-28%] desktop:top-[23%] bg-gray-900"
                error={errors?.a_compressionHight1?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="b_pinDiameter"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeB"
                name="b_pinDiameter"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={pistonKit.b_pinDiameter || ""}
                placeholder="15"
                position="left-[34%] top-[-11%] mobile:left-[38%] mobile:top-[-10%] laptop:left-[37%] laptop:top-[-6%] desktop:left-[37%] desktop:top-[-6%] bg-gray-900"
                error={errors?.b_pinDiameter?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="c_compressionHight2"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeC"
                name="c_compressionHight2"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={pistonKit.c_compressionHight2 || ""}
                placeholder="22"
                position="left-[99%] top-[22%] mobile:top-[23%] laptop:left-[99%] laptop:top-[25%] desktop:left-[99%] bg-gray-900"
                error={errors?.c_compressionHight2?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="d_bore"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeD"
                name="d_bore"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={pistonKit.d_bore || ""}
                placeholder="63.5"
                position="left-[39.5%] top-[102%] mobile:left-[43%] mobile:top-[100%] laptop:left-[39%] desktop:left-[37%] desktop:top-[100%]  bg-gray-900"
                error={errors?.d_bore?.message?.toString()}
              />
            )}
          />
          <PistonKitFront
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="flex w-[90%] flex-col items-center justify-center gap-5 mobile:flex-row mobile:justify-between laptop:w-full laptop:justify-between desktop:justify-center desktop:gap-20">
          <div className="relative mx-auto w-[195px] mobile:mx-0 mobile:w-[250px]  laptop:w-[355px]">
            <Controller
              control={control}
              name="e_length"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeE"
                  name="e_length"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={pistonKit.e_length || ""}
                  placeholder="45.5"
                  position="left-[98%] top-[41%] mobile:left-[98%] mobile:top-[41%] laptop:left-[95%]  laptop:top-[43.5%] desktop:left-[95%] bg-gray-900"
                  error={errors?.e_length?.message?.toString()}
                />
              )}
            />

            <PistonKitSide
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
          <div
            className="laptop: relative mr-0 w-[80px] mobile:mr-16
          mobile:w-[100px] desktop:w-[150px]"
          >
            <Controller
              control={control}
              name="b_pinDiameter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeB"
                  name="b_pinDiameter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={pistonKit.b_pinDiameter || ""}
                  placeholder="15"
                  position="left-[-7%] top-[-11%] mobile:left-[4%] mobile:top-[-8%] laptop:left-[-8%] desktop:left-[2%] desktop:top-[-5%] bg-gray-900"
                  error={errors?.b_pinDiameter?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="f_pinLength"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeF"
                  name="f_pinLength"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={pistonKit.f_pinLength || ""}
                  placeholder="48"
                  position="left-[100%] top-[55%] mobile:top-[56%] laptop:left-[96%] desktop:left-[95%] desktop:top-[57.5%] bg-gray-900"
                  error={errors?.f_pinLength?.message?.toString()}
                />
              )}
            />

            <PistonKitPin
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Controller
          control={control}
          name="g_stroke"
          render={({ field: { onChange } }) => (
            <InputSizeEntry
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              mainClass="sizeF"
              name="g_stroke"
              onChange={(value) => {
                onChange(value);
                handleOnChange(value);
              }}
              value={pistonKit.g_stroke || ""}
              placeholder="4"
              position=" relative"
              error={errors?.g_stroke?.message?.toString()}
            />
          )}
        />
      </div>
    </div>
  );
};

export default PistonKit;
