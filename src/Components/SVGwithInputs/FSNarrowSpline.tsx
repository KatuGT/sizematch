import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import FrontSprocketSideNarrowSpline from "../../../public/svgParts/FrontSprocketSideNarrowSpline";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketNarrowSpline from "../../../public/svgParts/FrontSprocketNarrowSpline";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";

interface FSNarrowSplineProps extends SVGProps {
  control?: any;
  errors?: any;
  data: any;
}

const FSNarrowSpline = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
  data,
}: FSNarrowSplineProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { fsNarrowSpline } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: "FSNarrowSpline",
    });
  };
  console.log(data);
  
  return (
    <div>
      <section className="p-4 laptop:p-0">
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Minimum inner diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Inner teeth count"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Maximum inner diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeD"
            text="D - Width"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Pitch"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-[50px] mobile:flex-row mobile:gap-[65px]">
        <div className="relative w-[200px] mobile:w-[300px] laptop:ml-10 laptop:mr-32 ">
          <Controller
            control={control}
            name="a_innerMinimumDiameter"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeA"
                name="a_innerMinimumDiameter"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={
                  data
                    ? data.a_innerMinimumDiameter
                    : fsNarrowSpline.a_innerMinimumDiameter
                }
                placeholder="15.50"
                position="left-[-70px] top-[37%]  laptop:left-[-100px] laptop:top-[37%]"
                error={errors?.a_innerMinimumDiameter?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="b_innerTeethNumber"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeB"
                name="b_innerTeethNumber"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={
                  data
                    ? data.b_innerTeethNumber
                    : fsNarrowSpline.b_innerTeethNumber
                }
                placeholder="12"
                position="right-[-65px] laptop:right-[-95px] top-[28%]"
                error={errors?.b_innerTeethNumber?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="c_innerMaximumDiameter"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeC"
                name="c_innerMaximumDiameter"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={
                  data
                    ? data.c_innerMaximumDiameter
                    : fsNarrowSpline.c_innerMaximumDiameter
                }
                placeholder="20.50"
                position="bottom-[-30px] left-[34%]"
                error={errors?.c_innerMaximumDiameter?.message?.toString()}
              />
            )}
          />
          <FrontSprocketNarrowSpline
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>

        <div className="flex items-center justify-center gap-7">
          <div className="relative w-[45px] laptop:w-[52px]">
            <Controller
              control={control}
              name="d_width"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeD"
                  name="d_width"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={data ? data.d_width : fsNarrowSpline.d_width}
                  placeholder="8.5"
                  position="bottom-[-35px] left-[-40%]"
                  error={errors?.d_width?.message?.toString()}
                />
              )}
            />
            <FrontSprocketSideNarrowSpline
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>

          <div className="relative mr-10 w-[100px]">
            <Controller
              control={control}
              name="e_chain"
              render={({ field: { onChange } }) => (
                <div className=" absolute bottom-[5%] right-[-100%] flex flex-col">
                  <input
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    name="e_chain"
                    onChange={(value) => {
                      onChange(value);
                      handleOnChange(value);
                    }}
                    value={data ? data.e_chain : fsNarrowSpline.e_chain}
                    className={`sizeE borde-gray-200 w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
                    placeholder="520"
                    list="chain"
                  />
                  <datalist id="chain">
                    <option value="532" />
                    <option value="530" />
                    <option value="525" />
                    <option value="520" />
                    <option value="428" />
                  </datalist>
                  {errors?.e_chain?.message && (
                    <span className="absolute bottom-[-20px] text-xs text-red-600">
                      {errors?.e_chain?.message.toString()}
                    </span>
                  )}
                </div>
              )}
            />
            <Chain
              className="sizeE"
              identificator="E"
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FSNarrowSpline;
