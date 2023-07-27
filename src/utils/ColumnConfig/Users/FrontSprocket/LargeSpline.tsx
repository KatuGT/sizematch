import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { FSlargeSplinesizeProps } from "@/types-enums-interfaces/FSlargeSplineProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import InputForChart from "@/Components/InputForChart";

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
        <InputForChart
          darkColor="text-sizeAcolor"
          ligthColor="text-sizeAcolorLight"
          mainClass="sizeA"
          onChange={handleFSLSChange}
          value={fsLargeSpline.a_innerMinimumDiameter || ""}
          label="A"
          placeholder="15.50"
          name="a_innerMinimumDiameter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
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
        <InputForChart
          darkColor="text-sizeBcolor"
          ligthColor="text-sizeBcolorLight"
          mainClass="sizeB"
          onChange={handleFSLSChange}
          value={fsLargeSpline.b_innerTeethSpacing || ""}
          label="B"
          placeholder="12"
          name="b_innerTeethSpacing"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
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
        <InputForChart
          darkColor="text-sizeCcolor"
          ligthColor="text-sizeCcolorLight"
          mainClass="sizeC"
          onChange={handleFSLSChange}
          value={fsLargeSpline.c_innerMaximumDiameter || ""}
          label="C"
          placeholder="20.50"
          name="c_innerMaximumDiameter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
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
        <InputForChart
          darkColor="text-sizeDcolor"
          ligthColor="text-sizeDcolorLight"
          mainClass="sizeD"
          onChange={handleFSLSChange}
          value={fsLargeSpline.d_centerToCenter || ""}
          label="D"
          placeholder="36"
          name="d_centerToCenter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
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
        <InputForChart
          darkColor="text-sizeDcolor"
          ligthColor="text-sizeDcolorLight"
          mainClass="sizeD"
          onChange={handleFSLSChange}
          value={fsLargeSpline.e_width || ""}
          label="E"
          placeholder="10.2"
          name="e_width"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
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
          } custom-input-wrapper `}
        >
          <span className="custom-input-span">F</span>
          <input
            placeholder="520"
            type="text"
            className="custom-input bg-slate-950 focus:border-slate-600 focus:shadow-md focus:outline-slate-700 focus-visible:outline-slate-700"
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
