import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { BrakeDiscsizeProps } from "@/types-enums-interfaces/BrakeDiscProps";

export const GetBrakeDiscConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { brakeDisc } = state;

  const handleBrakeDiscChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.BrakeDisc,
    });
  };

  const brakeDiscColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_discDiameter",
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
            placeholder="260"
            type="text"
            className="custom-input"
            name="a_discDiameter"
            value={brakeDisc.a_discDiameter || ""}
            onChange={handleBrakeDiscChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_holeDiameter",
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
            placeholder="10.5"
            type="text"
            className="custom-input"
            name="b_holeDiameter"
            value={
              brakeDisc["b_holeDiameter" as keyof BrakeDiscsizeProps] || ""
            }
            onChange={handleBrakeDiscChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "c_numberOfHoles",
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
            placeholder="6"
            type="text"
            className="custom-input"
            name="c_numberOfHoles"
            value={
              brakeDisc["c_numberOfHoles" as keyof BrakeDiscsizeProps] || ""
            }
            onChange={handleBrakeDiscChange}
          />
        </label>
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
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeD ${
            hoveredClass === "sizeD"
              ? "text-sizeDcolorLight"
              : "text-sizeDcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">D</span>
          <input
            placeholder="132"
            type="text"
            className="custom-input"
            name="d_center"
            value={brakeDisc["d_center" as keyof BrakeDiscsizeProps] || ""}
            onChange={handleBrakeDiscChange}
          />
        </label>
      ),
    },
    {
      field: "e_holeDistance",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeE ${
            hoveredClass === "sizeE"
              ? "text-sizeEcolorLight"
              : "text-sizeEcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">E</span>
          <input
            placeholder="150"
            type="text"
            className="custom-input"
            name="e_holeDistance"
            value={
              brakeDisc["e_holeDistance" as keyof BrakeDiscsizeProps] || ""
            }
            onChange={handleBrakeDiscChange}
          />
        </div>
      ),
    },
    {
      field: "f_width",
      headerName: "F",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeF ${
            hoveredClass === "sizeF"
              ? "text-sizeFcolorLight"
              : "text-sizeFcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">F</span>
          <input
            placeholder="5"
            type="text"
            className="custom-input"
            name="f_width"
            value={brakeDisc["f_width" as keyof BrakeDiscsizeProps] || ""}
            onChange={handleBrakeDiscChange}
          />
        </div>
      ),
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => <a href={params.row.link}>See more</a>,
    },
  ];
  return brakeDiscColumn;
};
