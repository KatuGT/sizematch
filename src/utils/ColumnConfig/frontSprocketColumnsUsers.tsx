import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ObjectId } from "mongodb";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";

// Front Sprocket NARROW Splie column config

export const getNSConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const narrowSplineColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_innerMinimumDiameter",
      headerName: "A",
      width: 90,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: 'center',

      renderHeader: (params) => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeA ${
            hoveredClass === "sizeA"
              ? "text-sizeAcolorLight"
              : "text-sizeAcolor"
          } flex flex-col bg-red-300`}
        >
          <p className="h-[5px] bg-red-300">A</p>
          <input type="text" className="h-[5px]" />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_innerTeethNumber",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeB ${
            hoveredClass === "sizeB"
              ? "text-sizeBcolorLight"
              : "text-sizeBcolor"
          }`}
        >
          B
        </div>
      ),
      sortable: false,
    },
    {
      field: "c_innerMaximumDiameter",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeC ${
            hoveredClass === "sizeC"
              ? "text-sizeCcolorLight"
              : "text-sizeCcolor"
          }`}
        >
          C
        </div>
      ),
      sortable: false,
    },
    {
      field: "d_width",
      headerName: "D",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeD ${
            hoveredClass === "sizeD"
              ? "text-sizeDcolorLight"
              : "text-sizeDcolor"
          }`}
        >
          D
        </div>
      ),
    },
    {
      field: "e_chain",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeE ${
            hoveredClass === "sizeE"
              ? "text-sizeEcolorLight"
              : "text-sizeEcolor"
          }`}
        >
          E
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

// Front Sprocket LARGE Splie column config
export const getLSConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const largeSplineColumnUser: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_innerMinimumDiameter",
      headerName: "A",
      width: 90,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeA ${
            hoveredClass === "sizeA"
              ? "text-sizeAcolorLight"
              : "text-sizeAcolor"
          }`}
        >
          A
        </div>
      ),
      sortable: false,
    },
    {
      field: "b_innerTeethSpacing",
      headerName: "B",
      width: 90,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeB ${
            hoveredClass === "sizeB"
              ? "text-sizeBcolorLight"
              : "text-sizeBcolor"
          }`}
        >
          B
        </div>
      ),
      sortable: false,
    },
    {
      field: "c_innerMaximumDiameter",
      headerName: "C",
      width: 90,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeC ${
            hoveredClass === "sizeC"
              ? "text-sizeCcolorLight"
              : "text-sizeCcolor"
          }`}
        >
          C
        </div>
      ),
      sortable: false,
    },
    {
      field: "d_centerToCenter",
      headerName: "D",
      sortable: false,
      width: 90,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeD ${
            hoveredClass === "sizeD"
              ? "text-sizeDcolorLight"
              : "text-sizeDcolor"
          }`}
        >
          D
        </div>
      ),
    },
    {
      field: "e_width",
      headerName: "E",
      sortable: false,
      width: 90,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeE ${
            hoveredClass === "sizeE"
              ? "text-sizeEcolorLight"
              : "text-sizeEcolor"
          }`}
        >
          E
        </div>
      ),
    },
    {
      field: "f_chain",
      headerName: "F",
      sortable: false,
      width: 90,
      renderHeader: (params) => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeF ${
            hoveredClass === "sizeF"
              ? "text-sizeFcolorLight"
              : "text-sizeFcolor"
          }`}
        >
          F
        </div>
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
