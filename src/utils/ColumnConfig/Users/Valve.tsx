import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { RearSprocketsizeProps } from "@/types-enums-interfaces/RearSprocketProps";

export const GetValveConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { valve } = state;

  const handleValveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

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
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeA ${
            hoveredClass === "sizeA"
              ? "text-sizeAcolorLight"
              : "text-sizeAcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">A</span>
          <input
            placeholder="5.5"
            type="text"
            className="custom-input"
            name="a_stemDiameter"
            value={valve.a_stemDiameter || ""}
            onChange={handleValveChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_totalLength",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeB ${
            hoveredClass === "sizeB"
              ? "text-sizeBcolorLight"
              : "text-sizeBcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">B</span>
          <input
            placeholder="66"
            type="text"
            className="custom-input"
            name="b_totalLength"
            value={valve.b_totalLength || ""}
            onChange={handleValveChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "c_head",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeC ${
            hoveredClass === "sizeC"
              ? "text-sizeCcolorLight"
              : "text-sizeCcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">C</span>
          <input
            placeholder="23"
            type="text"
            className="custom-input"
            name="c_head"
            value={valve.c_head || ""}
            onChange={handleValveChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => <a target="_blank" href={params.row.link}>See more</a>,
    },
  ];
  return rearSprocketColumn;
};
