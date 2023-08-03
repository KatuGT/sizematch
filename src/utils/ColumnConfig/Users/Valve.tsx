import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { RearSprocketsizeProps } from "@/types-enums-interfaces/RearSprocketProps";
import InputForChart from "@/Components/InputForChart";

export const GetValveConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { valve } = state;

  const handleValveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 7);

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.Valve,
    });
  };

  const rearSprocketColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_stemDiameter",
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
          onChange={handleValveChange}
          value={valve.a_stemDiameter || ""}
          label="A"
          placeholder="5.5"
          name="a_stemDiameter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "b_totalLength",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeBcolor"
          ligthColor="text-sizeBcolorLight"
          mainClass="sizeB"
          onChange={handleValveChange}
          value={valve.b_totalLength || ""}
          label="B"
          placeholder="66"
          name="b_totalLength"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "c_head",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeCcolor"
          ligthColor="text-sizeCcolorLight"
          mainClass="sizeC"
          onChange={handleValveChange}
          value={valve.c_head || ""}
          label="C"
          placeholder="23"
          name="c_head"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
    },
    {
      field: "d_type",
      headerName: "D",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeDcolor"
          ligthColor="text-sizeDcolorLight"
          mainClass="sizeD"
          onChange={handleValveChange}
          value={valve.d_type || ""}
          label="D"
          placeholder="23"
          name="d_type"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
      sortable: false,
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
