import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketLargeSpline from "../../../public/svgParts/FrontSprocketLargeSpline";
import FrontSprocketSideLargeSpline from "../../../public/svgParts/FrontSprocketSideLargeSpline";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

interface FSLargeSplineProps extends SVGProps {
  control: any;
  errors: any;
}

const FSLargeSpline = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: FSLargeSplineProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { fsLargeSpline, fsNarrowSpline } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 7);

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.FSLargeSpline,
    });
  };
  return (
    <div>
      <section className="p-2 laptop:p-0">
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
            text="B - Inner teeth spacing"
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
            text="D - Center to center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Width"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeF"
            text="F - Pitch"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="desktop: grid grid-cols-1 gap-x-32  laptop:grid-cols-2">
        <div className="mx-auto flex w-[300px] justify-center mobile:w-[500px]">
          <div className="relative w-[200px] mobile:w-[300px] ">
            <Controller
              control={control}
              name="a_innerMinimumDiameter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeA"
                  darkColor="text-sizeAcolor"
                  ligthColor="text-sizeAcolorLight"
                  name="a_innerMinimumDiameter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={fsLargeSpline.a_innerMinimumDiameter || ""}
                  placeholder="15.50"
                  position="left-[-70px] laptop:left-[-100px] top-[37%]"
                  error={errors?.a_innerMinimumDiameter?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="b_innerTeethSpacing"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeB"
                  darkColor="text-sizeBcolor"
                  ligthColor="text-sizeBcolorLight"
                  name="b_innerTeethSpacing"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={fsLargeSpline.b_innerTeethSpacing || ""}
                  placeholder="4"
                  position="right-[-68px] top-[35%]
                laptop:right-[-95px] laptop:top-[37%]"
                  error={errors?.b_innerTeethSpacing?.message?.toString()}
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
                  darkColor="text-sizeCcolor"
                  ligthColor="text-sizeCcolorLight"
                  name="c_innerMaximumDiameter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={fsLargeSpline.c_innerMaximumDiameter || ""}
                  placeholder="20.50"
                  position="bottom-[-30px] left-[34%] mobile:left-[40%]"
                  error={errors?.c_innerMaximumDiameter?.message?.toString()}
                />
              )}
            />

            <FrontSprocketLargeSpline
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-5 ">
          <div className="relative w-[45px]  self-start mobile:w-[57px]">
            <Controller
              control={control}
              name="d_centerToCenter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeD"
                  darkColor="text-sizeDcolor"
                  ligthColor="text-sizeDcolorLight"
                  name="d_centerToCenter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={fsLargeSpline.d_centerToCenter || ""}
                  placeholder="36"
                  position="top-[39%] left-[50px] mobile:top-[40%] mobile:left-[60px]"
                  error={errors?.d_centerToCenter?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="e_width"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeE"
                  name="e_width"
                  darkColor="text-sizeEcolor"
                  ligthColor="text-sizeEcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={fsLargeSpline.e_width || ""}
                  placeholder="10.2"
                  position="bottom-[-20px] left-[-23px] laptop:left-[-40px]"
                  error={errors?.e_width?.message?.toString()}
                />
              )}
            />
            <FrontSprocketSideLargeSpline
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
          <div className="relative w-[100px] self-end">
            <Controller
              control={control}
              name="f_chain"
              render={({ field: { onChange } }) => (
                <div className="absolute bottom-[5%] right-[-75%] flex flex-col laptop:right-[-100%] ">
                  <input
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onChange={(value) => {
                      onChange(value);
                      handleOnChange(value);
                    }}
                    value={fsLargeSpline.f_chain || ""}
                    name="f_chain"
                    className={`sizeF borde-gray-200 w-[70px] rounded-md border border-solid px-1 ${
                      hoveredClass === "sizeF"
                        ? "text-sizeFcolorLight"
                        : "text-sizeFcolor"
                    } bg-slate-950 focus:border-slate-600 focus:shadow-md focus:outline-slate-700 focus-visible:outline-slate-700 laptop:w-[100px]`}
                    placeholder="520"
                    list="chain"
                  />
                  <datalist id="chain">
                    <option value="532" />
                    <option value="530" />
                    <option value="525" />
                    <option value="520" />
                    <option value="428" />
                    <option value="420" />
                  </datalist>
                  {errors?.f_chain?.message && (
                    <span className="absolute bottom-[-20px] text-xs text-red-600">
                      {errors?.f_chain?.message.toString()}
                    </span>
                  )}
                </div>
              )}
            />
            <Chain
              className="sizeF"
              identificator="F"
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

export default FSLargeSpline;
