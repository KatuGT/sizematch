import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { FSlargeSplinesizeProps } from "@/types-enums-interfaces/FSlargeSplineProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

// Front Sprocket LARGE Splie column config
export const GetLSConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { fsLargeSpline } = state;

  const handleFSLSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.FSLargeSpline,
    });
  };
  const largeSplineColumnUser: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_innerMinimumDiameter",
      headerName: "A",
      width: 90,
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
            placeholder="15.50"
            type="text"
            className="custom-input"
            name="a_innerMinimumDiameter"
            value={fsLargeSpline.a_innerMinimumDiameter}
            onChange={handleFSLSChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_innerTeethSpacing",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
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
            placeholder="12"
            type="text"
            className="custom-input"
            name="b_innerTeethSpacing"
            value={fsLargeSpline.b_innerTeethSpacing}
            onChange={handleFSLSChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "c_innerMaximumDiameter",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
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
            placeholder="20.50"
            type="text"
            className="custom-input"
            name="c_innerMaximumDiameter"
            value={fsLargeSpline.c_innerMaximumDiameter}
            onChange={handleFSLSChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "d_centerToCenter",
      headerName: "D",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
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
            placeholder="36"
            type="text"
            className="custom-input"
            name="d_centerToCenter"
            value={fsLargeSpline.d_centerToCenter}
            onChange={handleFSLSChange}
          />
        </label>
      ),
    },
    {
      field: "e_width",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
      renderHeader: () => (
        <label
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
            placeholder="10.2"
            type="text"
            className="custom-input"
            name="e_width"
            value={fsLargeSpline.e_width}
            onChange={handleFSLSChange}
          />
        </label>
      ),
    },
    {
      field: "f_chain",
      headerName: "F",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
      renderHeader: () => (
        <label
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
            placeholder="520"
            type="text"
            className="custom-input"
            name="f_chain"
            value={fsLargeSpline.f_chain}
            onChange={handleFSLSChange}
            list="LargeSplainChain"
          />
          <datalist id="LargeSplainChain">
            <option value="532" />
            <option value="530" />
            <option value="525" />
            <option value="520" />
            <option value="428" />
            <option value="420" />
          </datalist>
        </label>
      ),
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      sortable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      renderCell: (params) => <a href={params.row.link}>Link</a>,
    },   
  ];

  return largeSplineColumnUser;
};
