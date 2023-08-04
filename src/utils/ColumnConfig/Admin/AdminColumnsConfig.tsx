import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { ObjectId } from "mongodb";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

type arrayPartDataProps = {
  field: string;
  headerName: string;
  darkColor: string;
  ligthColor: string;
  mainClass: string;
  placeholder: string;
};

interface ColumnProps extends SVGProps {
  arrayPartData: arrayPartDataProps[];
  part: possibleParts
  onClickDelete: (id: string | ObjectId) => Promise<void>;
  onClickEdit: (part: string, id: string | ObjectId) => Promise<void>;
}

export const GetAdminColumnConfig = ({
  onClickDelete,
  onClickEdit,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
  arrayPartData,
  part
}: ColumnProps) => {

  const column: GridColDef[] = [
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
    ...(arrayPartData.map((data) => {
      return {
        field: data.field,
        headerName: data.headerName,
        width: 90,
        renderHeader: () => (
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`${data.mainClass} ${
              hoveredClass === data.mainClass
                ? data.ligthColor
                : data.darkColor
            }`}
          >
            {data.headerName}
          </div>
        ),
        sortable: false,
      };
    }) as GridColDef[]),
    {
      field: "link",
      headerName: "Link",
      width: 90,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <a target="_blank" href={params.row.link}>
          See more
        </a>
      ),
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
            onClick={() => onClickEdit(part, params.row)}
            className="flex items-center justify-between"
          >
            <EditIcon color="info" />
            <span>Edit</span>
          </button>
        </div>
      ),
    },
  ];
  return column;
};
