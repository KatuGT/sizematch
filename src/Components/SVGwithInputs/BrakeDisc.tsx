import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import BrakeDiscFront from "../../../public/svgParts/BrakeDiscFront";
import BrakeDiscSide from "../../../public/svgParts/BrakeDiscSide";

interface BrakeDiscProps extends SVGProps {
  control: any;
  errors: any;
}

const BrakeDisc = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: BrakeDiscProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { brakeDisc } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.BrakeDisc,
    });
  };
  return (
    <div>
      <section className="p-2 laptop:p-0">
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Disc diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Hole diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Number of holes"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeD"
            text="D - Center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Hole distance"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeF"
            text="F - Width"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="grid grid-cols-1 gap-x-5 gap-y-5  laptop:grid-cols-2">
        <div className="mx-auto flex w-[300px] justify-center mobile:w-[450px] laptop:mx-0 laptop:justify-normal">
          <div className="relative flex w-[300px] flex-col  items-center mobile:w-[400px] laptop:items-end">
            <Controller
              control={control}
              name="a_discDiameter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeA"
                  name="a_discDiameter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.a_discDiameter || ""}
                  placeholder="260"
                  position="left-[10%] mobile:left-[40%] top-[39%] mobile:top-[48%] laptop:top-[42%] laptop:left-[37%] bg-gray-900"
                  error={errors?.a_discDiameter?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="b_holeDiameter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeB"
                  name="b_holeDiameter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.b_holeDiameter || ""}
                  placeholder="10.5"
                  position="left-[62%] mobile:left-[39%] top-[38%] mobile:top-[48%] laptop:top-[42%] laptop:left-[37%] bg-gray-900"
                  error={errors?.b_holeDiameter?.message?.toString()}
                />
              )}
            />

            <BrakeDiscFront
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
            <div
              className="mx-auto mt-2 flex gap-2"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span
                className={`sizeC ${
                  hoveredClass === "sizeC"
                    ? "text-sizeCcolorLight"
                    : "text-sizeCcolor"
                } `}
              >
                C
              </span>
              <Controller
                control={control}
                name="c_numberOfHoles"
                render={({ field: { onChange } }) => (
                  <InputSizeEntry
                    hoveredClass={hoveredClass}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    mainClass="sizeC"
                    name="c_numberOfHoles"
                    onChange={(value) => {
                      onChange(value);
                      handleOnChange(value);
                    }}
                    value={brakeDisc.c_numberOfHoles || ""}
                    placeholder="6"
                    position="relative"
                    error={errors?.c_numberOfHoles?.message?.toString()}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 laptop:mt-0">
          <div className="relative w-[100px] mobile:w-[350px]">
            <Controller
              control={control}
              name="d_center"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeD"
                  name="d_center"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.d_center || ""}
                  placeholder="132"
                  position="top-[39%] left-[-75%] mobile:left-[98%] mobile:top-[43%] laptop:top-[44%] "
                  error={errors?.d_center?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="e_holeDistance"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeE"
                  name="e_holeDistance"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.e_holeDistance || ""}
                  placeholder="150"
                  position="top-[39%] left-[97%] mobile:left-[98%] mobile:top-[43%] laptop:top-[44%] "
                  error={errors?.e_holeDistance?.message?.toString()}
                />
              )}
            />
            <BrakeDiscSide
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
            <Controller
              control={control}
              name="f_width"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeF"
                  name="f_width"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.f_width || ""}
                  placeholder="5"
                  position="relative mt-1 left-[8%]"
                  error={errors?.f_width?.message?.toString()}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrakeDisc;
