import React, { useContext } from "react";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import { Controller } from "react-hook-form";
import ListItem from "../ListItem/ListItem";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import ConnectingRodFront from "../../../public/svgParts/ConnectingRodFront";
import ConnectingRodSide from "../../../public/svgParts/ConnectingRodSide";
import ConnectingRodPin from "../../../public/svgParts/ConnectingRodPin";

interface ConnectingRodProps extends SVGProps {
  control: any;
  errors: any;
}

const ConnectingRod = ({
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: ConnectingRodProps) => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { connectingRod } = state;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.ConnectingRods,
    });
  };
  return (
    <div>
      <section className="p-2 laptop:p-0">
        <ul>
          <ListItem
            classSize="sizeA"
            text="A - Big end"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeB"
            text="B - Small end"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
          <ListItem
            classSize="sizeC"
            text="C - Center to center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeD"
            text="D - Total length"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeE"
            text="E - Big end width"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeF"
            text="F - Small end width"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeG"
            text="G - Eye to Eye center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeH"
            text="H - Big end pin diameter"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />

          <ListItem
            classSize="sizeI"
            text="I - Big end pin length"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hoveredClass={hoveredClass}
          />
        </ul>
      </section>
      <div className="relative flex flex-col items-center justify-center gap-10 laptop:left-20 laptop:flex-row desktop:gap-0 ">
        <div>
          <div className="relative mb-14 mt-10 w-[300px] flex-col items-center mobile:w-[400px] laptop:items-end desktop:w-[600px]">
            <Controller
              control={control}
              name="a_bigEnd"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeA"
                  name="a_bigEnd"
                  darkColor="text-sizeAcolor"
                  ligthColor="text-sizeAcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.a_bigEnd || ""}
                  placeholder="22"
                  position="left-[12%] top-[-20%] mobile:left-[15%] mobile:top-[-15%] laptop:left-[11%] desktop:left-[16%] desktop:top-[-10%] bg-gray-900"
                  error={errors?.a_bigEnd?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="b_smallEnd"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeB"
                  name="b_smallEnd"
                  darkColor="text-sizeBcolor"
                  ligthColor="text-sizeBcolorLight"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.b_smallEnd || ""}
                  placeholder="14"
                  position="left-[66%] top-[-20%] mobile:left-[69%] mobile:top-[-15%] laptop:left-[65%] desktop:left-[70%] desktop:top-[-10%] bg-gray-900"
                  error={errors?.b_smallEnd?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="c_centerToCenter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeC"
                  darkColor="text-sizeCcolor"
                  ligthColor="text-sizeCcolorLight"
                  name="c_centerToCenter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.c_centerToCenter || ""}
                  placeholder="80"
                  position="left-[40%] top-[102%] mobile:left-[43%] mobile:top-[100%] laptop:left-[39%] desktop:left-[43%] bg-gray-900"
                  error={errors?.c_centerToCenter?.message?.toString()}
                />
              )}
            />
            <ConnectingRodFront
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>

          <div className="relative flex w-[300px] flex-col items-center mobile:w-[400px] desktop:w-[600px]">
            <Controller
              control={control}
              name="d_totalLength"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeD"
                  darkColor="text-sizeDcolor"
                  ligthColor="text-sizeDcolorLight"
                  name="d_totalLength"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.d_totalLength || ""}
                  placeholder="106.25"
                  position="left-[39.5%] top-[0] mobile:left-[43%] mobile:top-[5%] laptop:left-[39%] desktop:left-[43%] desktop:top-[11%]  bg-gray-900"
                  error={errors?.d_totalLength?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="e_widthBigEnd"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeE"
                  darkColor="text-sizeEcolor"
                  ligthColor="text-sizeEcolorLight"
                  name="e_widthBigEnd"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.e_widthBigEnd || ""}
                  placeholder="13.5"
                  position="left-[-6%] top-[70%] mobile:left-[-15%] mobile:top-[44%] laptop:left-[-23%] desktop:left-[-14%] desktop:top-[46%] bg-gray-900"
                  error={errors?.e_widthBigEnd?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="f_widthSmallEnd"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeF"
                  darkColor="text-sizeFcolor"
                  ligthColor="text-sizeFcolorLight"
                  name="f_widthSmallEnd"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.f_widthSmallEnd || ""}
                  placeholder="10.5"
                  position="left-[82%] top-[70%] mobile:left-[95%] mobile:top-[44%] laptop:left-[96%] desktop:left-[95%] desktop:top-[46%] bg-gray-900"
                  error={errors?.f_widthSmallEnd?.message?.toString()}
                />
              )}
            />

            <Controller
              control={control}
              name="g_eyeToEyeCenter"
              render={({ field: { onChange } }) => (
                <InputSizeEntry
                  hoveredClass={hoveredClass}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  mainClass="sizeG"
                  darkColor="text-sizeGcolor"
                  ligthColor="text-sizeGcolorLight"
                  name="g_eyeToEyeCenter"
                  onChange={(value) => {
                    onChange(value);
                    handleOnChange(value);
                  }}
                  value={connectingRod.g_eyeToEyeCenter || ""}
                  placeholder="60.5"
                  position="left-[39.5%] top-[80%] mobile:left-[43%] mobile:top-[78%] laptop:left-[39%] desktop:left-[43%] bg-gray-900"
                  error={errors?.g_eyeToEyeCenter?.message?.toString()}
                />
              )}
            />

            <ConnectingRodSide
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>

        <div className="relative flex w-[300px] mobile:w-[400px] desktop:w-[500px]">
          <Controller
            control={control}
            name="h_bigEndPinDiameter"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeH"
                darkColor="text-sizeHcolor"
                ligthColor="text-sizeHcolorLight"
                name="h_bigEndPinDiameter"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={connectingRod.h_bigEndPinDiameter || ""}
                placeholder="16"
                position="left-[0%] top-[17%] mobile:left-[7%] mobile:top-[20%] laptop:left-[0%] desktop:left-[5%] desktop:top-[22%] bg-gray-900"
                error={errors?.h_bigEndPinDiameter?.message?.toString()}
              />
            )}
          />

          <Controller
            control={control}
            name="i_bigEndPinLength"
            render={({ field: { onChange } }) => (
              <InputSizeEntry
                hoveredClass={hoveredClass}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                mainClass="sizeI"
                darkColor="text-sizeIcolor"
                ligthColor="text-sizeIcolorLight"
                name="i_bigEndPinLength"
                onChange={(value) => {
                  onChange(value);
                  handleOnChange(value);
                }}
                value={connectingRod.i_bigEndPinLength || ""}
                placeholder="40"
                position="left-[49%] top-[100%] mobile:left-[52%] mobile:top-[96%] laptop:left-[48%] desktop:left-[50%] bg-gray-900"
                error={errors?.i_bigEndPinLength?.message?.toString()}
              />
            )}
          />

          <ConnectingRodPin
            hoveredClass={hoveredClass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectingRod;
