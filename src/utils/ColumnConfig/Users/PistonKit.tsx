import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

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
            placeholder="22.5"
            type="text"
            className="custom-input"
            name="a_compressionHight1"
            value={pistonKit.a_compressionHight1 || ""}
            onChange={handlePistonKitChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_pinDiameter",
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
            placeholder="15"
            type="text"
            className="custom-input"
            name="b_pinDiameter"
            value={pistonKit.b_pinDiameter || ""}
            onChange={handlePistonKitChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "c_compressionHight2",
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
            placeholder="22"
            type="text"
            className="custom-input"
            name="c_compressionHight2"
            value={pistonKit.c_compressionHight2 || ""}
            onChange={handlePistonKitChange}
          />
        </label>
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
            placeholder="63.5"
            type="text"
            className="custom-input"
            name="d_bore"
            value={pistonKit.d_bore || ""}
            onChange={handlePistonKitChange}
          />
        </label>
      ),
    },
    {
      field: "e_length",
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
            placeholder="45.5"
            type="text"
            className="custom-input"
            name="e_length"
            value={pistonKit.e_length || ""}
            onChange={handlePistonKitChange}
          />
        </div>
      ),
    },
    {
      field: "f_pinLength",
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
            placeholder="48"
            type="text"
            className="custom-input"
            name="f_pinLength"
            value={pistonKit.f_pinLength || ""}
            onChange={handlePistonKitChange}
          />
        </div>
      ),
    },
    {
      field: "g_stroke",
      headerName: "G",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeG ${
            hoveredClass === "sizeG"
              ? "text-sizeGcolorLight"
              : "text-sizeGcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">G</span>
          <input
            placeholder="4"
            type="text"
            className="custom-input"
            name="g_stroke"
            value={pistonKit.g_stroke || ""}
            onChange={handlePistonKitChange}
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
  return rearSprocketColumn;
};
