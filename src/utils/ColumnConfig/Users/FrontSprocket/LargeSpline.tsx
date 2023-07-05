import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { FSlargeSplinesizeProps } from "@/types-enums-interfaces/FSlargeSplineProps";

interface TableProps extends SVGProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  dataLargeSpline: FSlargeSplinesizeProps;
}

// Front Sprocket LARGE Splie column config
export const getLSConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
  onChange,
  dataLargeSpline,
}: TableProps) => {
 
  const largeSplineColumnUser: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_innerMinimumDiameter",
      headerName: "A",
      width: 90,
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
              dataLargeSpline[
                "a_innerMinimumDiameter" as keyof FSlargeSplinesizeProps
              ] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_innerTeethSpacing",
      headerName: "B",
      width: 90,
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
            placeholder="20"
            type="text"
            className="custom-input"
            name="b_innerTeethSpacing"
            value={
              dataLargeSpline[
                "b_innerTeethSpacing" as keyof FSlargeSplinesizeProps
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
            placeholder="20"
            type="text"
            className="custom-input"
            name="c_innerMaximumDiameter"
            value={
              dataLargeSpline[
                "c_innerMaximumDiameter" as keyof FSlargeSplinesizeProps
              ] || ""
            }
            onChange={onChange}
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
            placeholder="20"
            type="text"
            className="custom-input"
            name="d_centerToCenter"
            value={
              dataLargeSpline[
                "d_centerToCenter" as keyof FSlargeSplinesizeProps
              ] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
    },
    {
      field: "e_width",
      headerName: "E",
      sortable: false,
      width: 90,
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
            placeholder="20"
            type="text"
            className="custom-input"
            name="e_width"
            value={
              dataLargeSpline["e_width" as keyof FSlargeSplinesizeProps] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
    },
    {
      field: "f_chain",
      headerName: "F",
      sortable: false,
      width: 90,
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
            placeholder="20"
            type="text"
            className="custom-input"
            name="f_chain"
            value={
              dataLargeSpline["f_chain" as keyof FSlargeSplinesizeProps] || ""
            }
            onChange={onChange}
          />
        </label>
      ),
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      sortable: false,
      renderCell: (params) => <a href={params.row.link}>Link</a>,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
    },
  ];

  return largeSplineColumnUser;
};
