import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ObjectId } from "mongodb";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useContext } from "react";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";

// Front Sprocket NARROW Splie column config
interface ColumnsProps extends SVGProps {
  onClickDelete: (id: string | ObjectId) => Promise<void>;
  onClickEdit: (part: string, id: string | ObjectId) => Promise<void>;
}

export const GetNarrowSplineConfigColumn = ({
  onClickDelete,
  onClickEdit,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: ColumnsProps) => {
  const narrowSplineColumn: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 70, sortable: false },
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
      field: "b_innerTeethNumber",
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
      field: "d_width",
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
      field: "e_chain",
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
      field: "link",
      headerName: "Link",
      width: 90,
      sortable: false,
      renderCell: (params) => <a href={params.row.link}>See more</a>,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params: GridCellParams) => (
        <div className="flex flex-col items-stretch justify-between p-2 text-white">
          <button
            onClick={() => onClickDelete(params.row._id)}
            className="flex items-center justify-between"
          >
            <DeleteIcon color="error" /> <span>Delete</span>
          </button>
          <button
            onClick={() =>
              onClickEdit(possibleParts.FSNarrowSpline, params.row._id)
            }
            className="flex items-center justify-between"
          >
            <EditIcon color="info" />
            <span>Edit</span>
          </button>
        </div>
      ),
    },
  ];

  return narrowSplineColumn;
};

// Front Sprocket LARGE Splie column config
export const getLargeSplineConfigColumn = ({
  onClickDelete,
  onClickEdit,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: ColumnsProps) => {
  const largeSplineColumn: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 70, sortable: false },
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_innerMinimumDiameter",
      headerName: "A",
      width: 90,
      renderHeader: () => (
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
      renderHeader: () => (
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
      renderHeader: () => (
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
      renderHeader: () => (
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
      renderHeader: () => (
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
      renderHeader: () => (
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
      renderCell: (params: GridCellParams) => (
        <div className="flex flex-col items-stretch justify-between p-2 text-white">
          <button
            onClick={() => onClickDelete(params.row._id)}
            className="flex items-center justify-between"
          >
            <DeleteIcon color="error" /> <span>Delete</span>
          </button>
          <button
            onClick={() => {
              onClickEdit(possibleParts.FSLargeSpline, params.row);
              console.log(params.row);
            }}
            className="flex items-center justify-between"
          >
            <EditIcon color="info" />
            <span>Edit</span>
          </button>
        </div>
      ),
    },
  ];

  return largeSplineColumn;
};
