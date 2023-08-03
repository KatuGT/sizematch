import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import ValveSVG from "../../../public/svgParts/Valve";

interface ValveProps extends SVGProps {
  control: any;
  errors: any;
}

const Valve = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: ValveProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { valve } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 7);

    dispatch({
      type: name,
      payload: name === "d_type" ? value : newValue,
      group: possibleParts.Valve,
    });
  };
  return (
    <div>
      <section className="p-2 laptop:p-0">
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Stem diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Total length"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Head diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="my-5">
        <div className="relative mx-auto mt-10 w-[200px]">
          <Controller
            control={control}
            name="a_stemDiameter"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeA"
                darkColor="text-sizeAcolor"
                ligthColor="text-sizeAcolorLight"
                name="a_stemDiameter"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={valve.a_stemDiameter || ""}
                placeholder="5.5"
                position="left-[26%] top-[-8%] desktop:left-[19%] bg-gray-900"
                error={errors?.a_stemDiameter?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="b_totalLength"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeB"
                darkColor="text-sizeBcolor"
                ligthColor="text-sizeBcolorLight"
                name="b_totalLength"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={valve.b_totalLength || ""}
                placeholder="66"
                position="left-[102%] top-[44%] bg-gray-900"
                error={errors?.b_totalLength?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="c_head"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeC"
                darkColor="text-sizeCcolor"
                ligthColor="text-sizeCcolorLight"
                name="c_head"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={valve.c_head || ""}
                placeholder="23"
                position="left-[20%] top-[101%] desktop:left-[19%] bg-gray-900"
                error={errors?.c_head?.message?.toString()}
              />
            )}
          />

          <ValveSVG
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <Controller
          control={control}
          name="d_type"
          render={({ field: { onChange } }) => (
            <div className="flex rounded-lg border border-gray-500  bg-gray-600 text-white">
              <label className="flex gap-2 border-r border-gray-500 px-3 py-2">
                <input
                  type="radio"
                  name="d_type"
                  value="IN"
                  checked={valve.d_type === "IN"}
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                />
                <span>IN</span>
              </label>

              <label className="flex gap-2 px-3 py-2">
                <input
                  type="radio"
                  name="d_type"
                  value="EX"
                  checked={valve.d_type === "EX"}
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                />
                <span>EX</span>
              </label>
            </div>
          )}
        />
        {errors.d_type && (
          <p className="bottom-[-20px] text-xs text-red-600">
            {errors.d_type.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Valve;
