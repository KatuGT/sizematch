import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import BrakeDiscFront from "../../../public/svgParts/BrakeDiscFront";
import BrakeDiscSide from "../../../public/svgParts/BrakeDiscSide";
import BrakeDiscFrontV2 from "../../../public/svgParts/BrakeDiscFrontV2";
import BrakeDiscSidev2 from "../../../public/svgParts/BrakeDiscSidev2";

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
      <div className="grid grid-cols-1 gap-x-5 gap-y-5  laptop:relative laptop:left-16 laptop:grid-cols-2 laptop:gap-x-0 desktop:left-20">
        <div className="mx-auto flex w-[300px] justify-center mobile:w-[450px] laptop:mx-0 laptop:items-start laptop:justify-end ">
          <div className="relative flex w-[300px] flex-col  items-center mobile:w-[400px] laptop:items-end desktop:w-[500px]">
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
                  darkColor="text-sizeAcolor"
                  ligthColor="text-sizeAcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.a_discDiameter || ""}
                  placeholder="260"
                  position="left-[10%] top-[37%] mobile:top-[41%] laptop:top-[40%] laptop:left-[-27%] desktop:left-[-23%] desktop:top-[42%] bg-gray-900"
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
                  darkColor="text-sizeBcolor"
                  ligthColor="text-sizeBcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.b_holeDiameter || ""}
                  placeholder="10.5"
                  position="left-[42%] top-[30%] mobile:left-[46%] mobile:top-[32%] desktop:left-[46%] bg-gray-900"
                  error={errors?.b_holeDiameter?.message?.toString()}
                />
              )}
            />

            <BrakeDiscFrontV2
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />

            <div
              className="relative left-[18px] mx-auto mt-2 flex flex-col items-center
              gap-2 desktop:mt-0"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span
                className={`sizeC text-center ${
                  hoveredClass === "sizeC"
                    ? "text-sizeCcolorLight"
                    : "text-sizeCcolor"
                } `}
              >
                C - Number of holes
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
                    darkColor="text-sizeCcolor"
                    ligthColor="text-sizeCcolorLight"
                    isMilimeter={false}
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
        <div className="mt-10 flex flex-col items-center justify-center gap-10 laptop:mt-0 laptop:justify-start ">
          <div className="relative w-[100px] mobile:w-[110px] desktop:w-[130px]">
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
                  darkColor="text-sizeDcolor"
                  ligthColor="text-sizeDcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.d_center || ""}
                  placeholder="132"
                  position="top-[41.5%] left-[-92%] mobile:left-[-85%] laptop:left-[-100%] desktop:top-[42%] desktop:left-[-83%]"
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
                  darkColor="text-sizeEcolor"
                  ligthColor="text-sizeEcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.e_holeDistance || ""}
                  placeholder="150"
                  position="top-[41.5%] left-[105%] desktop:top-[42%]"
                  error={errors?.e_holeDistance?.message?.toString()}
                />
              )}
            />
            <BrakeDiscSidev2
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
                  darkColor="text-sizeFcolor"
                  ligthColor="text-sizeFcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={brakeDisc.f_width || ""}
                  placeholder="5"
                  position="mt-1 left-[8%] laptop:left-[-5%] desktop:left-[8%]"
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
