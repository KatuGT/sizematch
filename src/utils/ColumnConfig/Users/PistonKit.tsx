import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import InputForChart from "@/Components/InputForChart";

export const GetPistonKitConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { pistonKit } = state;

  const handlePistonKitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.PistonKit,
    });
  };

  const rearSprocketColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_compressionHight1",
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
          onChange={handlePistonKitChange}
          value={pistonKit.a_compressionHight1 || ""}
          label="A"
          placeholder="22.5"
          name="a_compressionHight1"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "b_pinDiameter",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeBcolor"
          ligthColor="text-sizeBcolorLight"
          mainClass="sizeB"
          onChange={handlePistonKitChange}
          value={pistonKit.b_pinDiameter || ""}
          label="B"
          placeholder="15"
          name="b_pinDiameter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "c_compressionHight2",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeCcolor"
          ligthColor="text-sizeCcolorLight"
          mainClass="sizeC"
          onChange={handlePistonKitChange}
          value={pistonKit.c_compressionHight2 || ""}
          label="C"
          placeholder="22"
          name="c_compressionHight2"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "d_bore",
      headerName: "D",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeDcolor"
          ligthColor="text-sizeDcolorLight"
          mainClass="sizeD"
          onChange={handlePistonKitChange}
          value={pistonKit.d_bore || ""}
          label="D"
          placeholder="63.5"
          name="d_bore"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "e_length",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeEcolor"
          ligthColor="text-sizeEcolorLight"
          mainClass="sizeE"
          onChange={handlePistonKitChange}
          value={pistonKit.e_length || ""}
          label="E"
          placeholder="45.5"
          name="e_length"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "f_pinLength",
      headerName: "F",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeFcolor"
          ligthColor="text-sizeFcolorLight"
          mainClass="sizeF"
          onChange={handlePistonKitChange}
          value={pistonKit.f_pinLength || ""}
          label="F"
          placeholder="48"
          name="f_pinLength"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "g_stroke",
      headerName: "G",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeGcolor"
          ligthColor="text-sizeGcolorLight"
          mainClass="sizeG"
          onChange={handlePistonKitChange}
          value={pistonKit.g_stroke || ""}
          label="G"
          placeholder="4"
          name="g_stroke"
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
  return rearSprocketColumn;
};
