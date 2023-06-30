import React from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketLargeSpline from "../../../public/svgParts/FrontSprocketLargeSpline";
import FrontSprocketSideLargeSpline from "../../../public/svgParts/FrontSprocketSideLargeSpline";
import { useHover } from "@/utils/handleHoveredSize";
import ListItem from "../ListItem/ListItem";

interface FSLargeSplineProps {
  control: any;
  errors: any;
}

const FSLargeSpline = ({ control, errors }: FSLargeSplineProps) => {
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
            text="B - Inner teeth spacing"
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
            text="D - Center to center"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Width"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
          <ListItem
            classSize="sizeF"
            text="F - Pitch"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </ul>
      </section>
      <div className="mb-20  flex flex-wrap justify-center">
        <div className="relative mr-32 w-[300px] flex-1">
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
            name="b_innerTeethSpacing"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                hoveredClass={hoverClass}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                mainClass="sizeB"
                onChange={onChange}
                value={value}
                placeholder="12"
                position="right-[-95px] top-[37%]"
                error={errors?.b_innerTeethSpacing?.message?.toString()}
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

          <FrontSprocketLargeSpline
            hoveredClass={hoverClass}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="relative w-[57px] self-start">
          <Controller
            control={control}
            name="d_centerToCenter"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                hoveredClass={hoverClass}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                mainClass="sizeD"
                onChange={onChange}
                value={value}
                placeholder="36"
                position="top-[40%] left-[60px]"
                error={errors?.d_centerToCenter?.message?.toString()}
              />
            )}
          />

          <Controller
            control={control}
            name="e_width"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                hoveredClass={hoverClass}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                mainClass="sizeE"
                onChange={onChange}
                value={value}
                placeholder="10.2"
                position="bottom-[-20px] left-[-40px]"
                error={errors?.e_width?.message?.toString()}
              />
            )}
          />
          <FrontSprocketSideLargeSpline
            hoveredClass={hoverClass}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative mr-10 w-[100px]">
          <Controller
            control={control}
            name="f_chain"
            render={({ field: { onChange, value } }) => (
              <div className=" absolute bottom-[5%] right-[-100%] flex flex-col">
                <input
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                  onChange={onChange}
                  value={value?.replace(/[^0-9.]/g, "") || ""}
                  className={`sizeF borde-gray-200 w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
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
            hoveredClass={hoverClass}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default FSLargeSpline;
