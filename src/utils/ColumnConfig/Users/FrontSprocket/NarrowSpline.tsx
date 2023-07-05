import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { FSNarrowSplinesizeProps } from "@/types-enums-interfaces/FSnarrowSplineProps";

interface TableProps extends SVGProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  dataNarrowSpline: FSNarrowSplinesizeProps;
}

// Front Sprocket NARROW Splie column config
export const getNSConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
  onChange,
  dataNarrowSpline,
}: TableProps) => {
  const narrowSplineColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_innerMinimumDiameter",
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
            placeholder="20"
            type="text"
            className="custom-input"
            name="a_innerMinimumDiameter"
            value={
              dataNarrowSpline[
                "a_innerMinimumDiameter" as keyof FSNarrowSplinesizeProps
              ] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_innerTeethNumber",
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
            placeholder="22"
            type="text"
            className="custom-input"
            name="b_innerTeethNumber"
            value={
              dataNarrowSpline[
                "b_innerTeethNumber" as keyof FSNarrowSplinesizeProps
              ] || ""
            }
            onChange={onChange}
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
            placeholder="25.5"
            type="text"
            className="custom-input"
            name="c_innerMaximumDiameter"
            value={
              dataNarrowSpline[
                "c_innerMaximumDiameter" as keyof FSNarrowSplinesizeProps
              ] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "d_width",
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
            placeholder="10.8"
            type="text"
            className="custom-input"
            name="d_width"
            value={
              dataNarrowSpline["d_width" as keyof FSNarrowSplinesizeProps] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
    },
    {
      field: "e_chain",
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
            placeholder="520"
            type="text"
            className="custom-input"
            name="e_chain"
            value={
              dataNarrowSpline["e_chain" as keyof FSNarrowSplinesizeProps] || ""
            }
            onChange={onChange}
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
  return narrowSplineColumn;
};
