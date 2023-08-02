import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { FSNarrowSplinesizeProps } from "@/types-enums-interfaces/FSnarrowSplineProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { RearSprocketsizeProps } from "@/types-enums-interfaces/RearSprocketProps";
import { ConnectingRodSizeProps } from "@/types-enums-interfaces/ConnectingRodProps";
import InputForChart from "@/Components/InputForChart";

export const GetConnectingRodConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { connectingRod } = state;

  const handleRearSprocketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 7);

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.ConnectingRods,
    });
  };

  const ConnectingRodColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_bigEnd",
      headerName: "A",
      width: 90,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",

      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeAcolor"
          ligthColor="text-sizeAcolorLight"
          mainClass="sizeA"
          onChange={handleRearSprocketChange}
          value={connectingRod.a_bigEnd || ""}
          label="A"
          placeholder="22"
          name="a_bigEnd"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "b_smallEnd",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeBcolor"
          ligthColor="text-sizeBcolorLight"
          mainClass="sizeB"
          onChange={handleRearSprocketChange}
          value={connectingRod.b_smallEnd || ""}
          label="B"
          placeholder="14"
          name="b_smallEnd"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "c_centerToCenter",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeCcolor"
          ligthColor="text-sizeCcolorLight"
          mainClass="sizeC"
          onChange={handleRearSprocketChange}
          value={connectingRod.c_centerToCenter || ""}
          label="C"
          placeholder="80"
          name="c_centerToCenter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "d_totalLength",
      headerName: "D",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeDcolor"
          ligthColor="text-sizeDcolorLight"
          mainClass="sizeD"
          onChange={handleRearSprocketChange}
          value={connectingRod.d_totalLength || ""}
          label="D"
          placeholder="106.25"
          name="d_totalLength"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "e_widthBigEnd",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeEcolor"
          ligthColor="text-sizeEcolorLight"
          mainClass="sizeE"
          onChange={handleRearSprocketChange}
          value={connectingRod.e_widthBigEnd || ""}
          label="E"
          placeholder="13.5"
          name="e_widthBigEnd"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "f_widthSmallEnd",
      headerName: "F",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeFcolor"
          ligthColor="text-sizeFcolorLight"
          mainClass="sizeF"
          onChange={handleRearSprocketChange}
          value={connectingRod.f_widthSmallEnd || ""}
          label="F"
          placeholder="10.5"
          name="f_widthSmallEnd"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "g_eyeToEyeCenter",
      headerName: "G",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeGcolor"
          ligthColor="text-sizeGcolorLight"
          mainClass="sizeG"
          onChange={handleRearSprocketChange}
          value={connectingRod.g_eyeToEyeCenter || ""}
          label="G"
          placeholder="60.5"
          name="g_eyeToEyeCenter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "h_bigEndPinDiameter",
      headerName: "H",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeHcolor"
          ligthColor="text-sizeHcolorLight"
          mainClass="sizeH"
          onChange={handleRearSprocketChange}
          value={connectingRod.h_bigEndPinDiameter || ""}
          label="H"
          placeholder="16"
          name="h_bigEndPinDiameter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "i_bigEndPinLength",
      headerName: "I",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeIcolor"
          ligthColor="text-sizeIcolorLight"
          mainClass="sizeI"
          onChange={handleRearSprocketChange}
          value={connectingRod.i_bigEndPinLength || ""}
          label="I"
          placeholder="40"
          name="i_bigEndPinLength"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <a target="_blank" href={params.row.link}>
          See more
        </a>
      ),
    },
  ];
  return ConnectingRodColumn;
};
