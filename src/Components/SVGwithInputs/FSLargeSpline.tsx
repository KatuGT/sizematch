import React from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketLargeSpline from "../../../public/svgParts/FrontSprocketLargeSpline";
import FrontSprocketSideLargeSpline from "../../../public/svgParts/FrontSprocketSideLargeSpline";

interface FSLargeSplineProps {
  control: any;
  errors: any;
}

const FSLargeSpline = ({ control, errors }: FSLargeSplineProps) => {
  return (
    <div className="mb-10  flex flex-wrap justify-center">
      <div className="relative mr-32 w-[300px] ">
        <Controller
          control={control}
          name="a_innerMinimumDiameter"
          render={({ field: { onChange, value } }) => (
            <InputSizeEntry
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
              onChange={onChange}
              value={value}
              placeholder="20.50"
              position="bottom-[-30px] left-[34%]"
              error={errors?.c_innerMaximumDiameter?.message?.toString()}
            />
          )}
        />

        <FrontSprocketLargeSpline/>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-[55px] self-start">
          <Controller
            control={control}
            name="d_centerToCenter"
            render={({ field: { onChange, value } }) => (
              <InputSizeEntry
                onChange={onChange}
                value={value}
                placeholder="25.2"
                position="bottom-[-35px] left-[-40%]"
                error={errors?.d_width?.message?.toString()}
              />
            )}
          />
          <FrontSprocketSideLargeSpline />
        </div>

        <div className="relative mr-10 w-[100px]">
          <Controller
            control={control}
            name="e_chain"
            render={({ field: { onChange, value } }) => (
              <div className=" absolute bottom-[5%] right-[-100%] flex flex-col">
                <input
                  onChange={onChange}
                  value={value?.replace(/[^0-9.]/g, "") || ""}
                  className={`borde-gray-200 w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
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
          <Chain />
        </div>
      </div>
    </div>
  );
};

export default FSLargeSpline;
