import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import Chain from "../../../public/svgParts/Chain";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import RearSprocketSide from "../../../public/svgParts/RearSprocketSide";
import RearSprocketFront from "../../../public/svgParts/RearSprocketFront";

interface RearSprocketProps extends SVGProps {
  control: any;
  errors: any;
}

const RearSprocket = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: RearSprocketProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { rearSprocket } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 7);

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.RearSprocket,
    });
  };
  return (
    <div>
      <section className="p-2 laptop:p-0">
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Hole diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Number of holes"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Hole distance"
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
            text="E - Pitch"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="relative grid grid-cols-1 gap-x-72  gap-y-5 laptop:left-[-70px] laptop:grid-cols-2">
        <div className="mx-auto flex w-[300px] justify-center mobile:w-[450px] laptop:mx-0 laptop:justify-normal">
          <div className="relative flex w-[200px] flex-col  items-center mobile:w-[400px] laptop:items-end">
            <Controller
              control={control}
              name="a_holeDiameter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeA"
                  darkColor="text-sizeAcolor"
                  ligthColor="text-sizeAcolorLight"
                  name="a_holeDiameter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={rearSprocket.a_holeDiameter || ""}
                  placeholder="10.5"
                  position="left-[28%] top-[42%] mobile:left-[40%]  mobile:top-[48%] laptop:top-[42%] laptop:left-[37%]"
                  error={errors?.a_holeDiameter?.message?.toString()}
                />
              )}
            />

            <RearSprocketFront
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />

            <div
              className="relative mx-auto mt-2 flex flex-col items-center
              gap-2 desktop:mt-0"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span
                className={`sizeB text-center ${
                  hoveredClass === "sizeB"
                    ? "text-sizeBcolorLight"
                    : "text-sizeBcolor"
                } `}
              >
                B - Number of holes
              </span>
              <Controller
                control={control}
                name="b_numberOfHoles"
                render={({ field: { onChange } }) => (
                  <InputSizeEntry
                    hoveredClass={hoveredClass}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    mainClass="sizeB"
                    darkColor="text-sizeBcolor"
                    ligthColor="text-sizeBcolorLight"
                    name="b_numberOfHoles"
                    onChange={(value) => {
                      onChange(value);
                      handleOnChange(value);
                    }}
                    value={rearSprocket.b_numberOfHoles || ""}
                    placeholder="6"
                    position="relative"
                    error={errors?.b_numberOfHoles?.message?.toString()}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 laptop:mt-0">
          <div className="relative w-[200px] mobile:w-[350px]">
            <Controller
              control={control}
              name="c_holeDistance"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeC"
                  darkColor="text-sizeCcolor"
                  ligthColor="text-sizeCcolorLight"
                  name="c_holeDistance"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={rearSprocket.c_holeDistance || ""}
                  placeholder="150"
                  position="top-[42%] left-[98%] mobile:top-[43%] mobile:left-[-22%] laptop:top-[44%] laptop:left-[-28%] "
                  error={errors?.c_holeDistance?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="d_center"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeD"
                  darkColor="text-sizeDcolor"
                  ligthColor="text-sizeDcolorLight"
                  name="d_center"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={rearSprocket.d_center || ""}
                  placeholder="125"
                  position="top-[42%] left-[-35%] mobile:left-[98%] mobile:top-[43%] laptop:top-[44%] "
                  error={errors?.d_center?.message?.toString()}
                />
              )}
            />

            <RearSprocketSide
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
          <div className="relative flex w-[200px] items-end">
            <Chain
              className="sizeE"
              identificator="E"
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
            <Controller
              control={control}
              name="e_chain"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeE"
                  darkColor="text-sizeEcolor"
                  ligthColor="text-sizeEcolorLight"
                  name="e_chain"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={rearSprocket.e_chain || ""}
                  placeholder="520"
                  position="relative bottom-[5px]"
                  error={errors?.e_chain?.message?.toString()}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RearSprocket;
