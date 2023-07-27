import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { RearSprocketsizeProps } from "@/types-enums-interfaces/RearSprocketProps";
import InputForChart from "@/Components/InputForChart";

export const GetRearSprocketConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { rearSprocket } = state;

  const handleRearSprocketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.RearSprocket,
    });
  };

  const rearSprocketColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_holeDiameter",
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
          value={rearSprocket.a_holeDiameter || ""}
          label="A"
          placeholder="10"
          name="a_holeDiameter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "b_numberOfHoles",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeBcolor"
          ligthColor="text-sizeBcolorLight"
          mainClass="sizeB"
          onChange={handleRearSprocketChange}
          value={rearSprocket.b_numberOfHoles || ""}
          label="B"
          placeholder="6"
          name="b_numberOfHoles"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "c_holeDistance",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeCcolor"
          ligthColor="text-sizeCcolorLight"
          mainClass="sizeC"
          onChange={handleRearSprocketChange}
          value={rearSprocket.c_holeDistance || ""}
          label="C"
          placeholder="150"
          name="c_holeDistance"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "d_center",
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
          value={rearSprocket.d_center || ""}
          label="D"
          placeholder="125"
          name="d_center"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "e_chain",
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
          value={rearSprocket.e_chain || ""}
          label="E"
          placeholder="520"
          name="e_chain"
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
