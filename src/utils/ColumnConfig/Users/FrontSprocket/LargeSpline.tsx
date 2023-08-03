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

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 7);

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.FSLargeSpline,
    });
  };
  const largeSplineColumnUser: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    {
      field: "code",
      headerName: "Code",
      width: 130,
      sortComparator: (v1, v2) => {
        const num1 = parseInt(v1.slice(3));
        const num2 = parseInt(v2.slice(3));
        return num1 - num2;
      },
    },
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
          placeholder="4"
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
      field: "d_innerTeethNumber",
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
          value={fsLargeSpline.d_innerTeethNumber || ""}
          label="D"
          placeholder="6"
          name="d_innerTeethNumber"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "e_centerToCenter",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeEcolor"
          ligthColor="text-sizeEcolorLight"
          mainClass="sizeE"
          onChange={handleFSLSChange}
          value={fsLargeSpline.e_centerToCenter || ""}
          label="E"
          placeholder="36"
          name="e_centerToCenter"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "f_width",
      headerName: "F",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
      renderHeader: () => (
        <InputForChart
          darkColor="text-sizeFcolor"
          ligthColor="text-sizeFcolorLight"
          mainClass="sizeF"
          onChange={handleFSLSChange}
          value={fsLargeSpline.f_width || ""}
          label="F"
          placeholder="10.2"
          name="f_width"
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ),
    },
    {
      field: "g_chain",
      headerName: "G",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      headerAlign: "center",
      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeG ${
            hoveredClass === "sizeG"
              ? "text-sizeGcolorLight"
              : "text-sizeGcolor"
          } custom-input-wrapper `}
        >
          <span className="custom-input-span">G</span>
          <input
            placeholder="520"
            type="text"
            className="custom-input bg-slate-950 focus:border-slate-600 focus:shadow-md focus:outline-slate-700 focus-visible:outline-slate-700"
            name="g_chain"
            value={fsLargeSpline.g_chain}
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
