import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ObjectId } from "mongodb";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

interface ColumnsProps extends SVGProps {
  onClickDelete: (id: string | ObjectId) => Promise<void>;
  onClickEdit: (part: string, id: string | ObjectId) => Promise<void>;
}

export const GetConnectingRodConfigColumn = ({
  onClickDelete,
  onClickEdit,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: ColumnsProps) => {
  const ConnectingRodColumn: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 70, sortable: false },
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_bigEnd",
      headerName: "A",
      width: 70,
      disableColumnMenu: true,
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
      field: "b_smallEnd",
      headerName: "B",
      width: 70,
      disableColumnMenu: true,
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
      field: "c_centerToCenter",
      headerName: "C",
      width: 70,
      disableColumnMenu: true,
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
      field: "d_totalLength",
      headerName: "D",
      sortable: false,
      width: 70,
      disableColumnMenu: true,
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
      field: "e_widthBigEnd",
      headerName: "E",
      sortable: false,
      width: 70,
      disableColumnMenu: true,
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
      field: "f_widthSmallEnd",
      headerName: "F",
      sortable: false,
      width: 70,
      disableColumnMenu: true,
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
      field: "g_eyeToEyeCenter",
      headerName: "G",
      sortable: false,
      width: 70,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeG ${
            hoveredClass === "sizeG"
              ? "text-sizeGcolorLight"
              : "text-sizeGcolor"
          }`}
        >
          G
        </div>
      ),
    },
    {
      field: "h_bigEndPinDiameter",
      headerName: "H",
      sortable: false,
      width: 70,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeH ${
            hoveredClass === "sizeH"
              ? "text-sizeHcolorLight"
              : "text-sizeHcolor"
          }`}
        >
          H
        </div>
      ),
    },
    {
      field: "i_bigEndPinLength",
      headerName: "I",
      sortable: false,
      width: 70,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeI ${
            hoveredClass === "sizeI"
              ? "text-sizeIcolorLight"
              : "text-sizeIcolor"
          }`}
        >
          I
        </div>
      ),
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => <a target="_blank" href={params.row.link}>See more</a>,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      disableColumnMenu: true,
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
              onClickEdit(possibleParts.ConnectingRods, params.row)
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

  return ConnectingRodColumn;
};
