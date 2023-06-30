import React from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import FrontSprocketSideNarrowSpline from "../../../public/svgParts/FrontSprocketSideNarrowSpline";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketNarrowSpline from "../../../public/svgParts/FrontSprocketNarrowSpline";
import { useHover } from "@/utils/handleHoveredSize";
import ListItem from "../ListItem/ListItem";

interface FSNarrowSplineProps {
  control: any;
  errors: any;
}

const FSNarrowSpline = ({ control, errors }: FSNarrowSplineProps) => {
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  return (
    <div>
      <section>
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Minimum inner diameter"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Inner teeth count"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Maximum inner diameter"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />

          <ListItem
            classSize="sizeD"
            text="D - Width"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Pitch"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </ul>
      </section>
      <div className="mb-10  flex flex-wrap items-center justify-center">
        <div className="relative mr-32 w-[300px] ">
          <Controller
            control={control}
            name="a_innerMinimumDiameter"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                hoveredClass={hoverClass}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                mainClass="sizeA"
                onChange={onChange}
                value={value}
                placeholder="15.50"
                position="left-[-100px] top-[37%]"
                error={errors?.a_innerMinimumDiameter?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="b_innerTeethNumber"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                hoveredClass={hoverClass}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                mainClass="sizeB"
                onChange={onChange}
                value={value}
                placeholder="12"
                position="right-[-95px] top-[28%]"
                error={errors?.b_innerTeethNumber?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="c_innerMaximumDiameter"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                hoveredClass={hoverClass}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                mainClass="sizeC"
                onChange={onChange}
                value={value}
                placeholder="20.50"
                position="bottom-[-30px] left-[34%]"
                error={errors?.c_innerMaximumDiameter?.message?.toString()}
              />
            )}
          />
          <FrontSprocketNarrowSpline
            hoveredClass={hoverClass}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-[52px]">
            <Controller
              control={control}
              name="d_width"
              render={({ field: { onChange, value } }) => (
                <InputSizeEntry
                  hoveredClass={hoverClass}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                  mainClass="sizeD"
                  onChange={onChange}
                  value={value}
                  placeholder="8.5"
                  position="bottom-[-35px] left-[-40%]"
                  error={errors?.d_width?.message?.toString()}
                />
              )}
            />
            <FrontSprocketSideNarrowSpline
              hoveredClass={hoverClass}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          <div className="relative mr-10 w-[100px]">
            <Controller
              control={control}
              name="e_chain"
              render={({ field: { onChange, value } }) => (
                <div className=" absolute bottom-[5%] right-[-100%] flex flex-col">
                  <input
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onChange={onChange}
                    value={value?.replace(/[^0-9.]/g, "") || ""}
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
              hoveredClass={hoverClass}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FSNarrowSpline;
