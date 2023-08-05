import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LaunchIcon from "@mui/icons-material/Launch";
import { ObjectId } from "mongodb";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

type arrayPartDataProps = {
  field: string;
  headerName: string;
  darkColor: string;
  ligthColor: string;
  mainClass: string;
  placeholder: string;
};

interface ColumnsProps extends SVGProps {
  onClickDelete: (id: string | ObjectId) => Promise<void>;
  onClickEdit: (part: string, id: string | ObjectId) => Promise<void>;
  part: possibleParts;
  arrayPartData: arrayPartDataProps[];
}

export const GetBAdminColumnConfigColumn = ({
  onClickDelete,
  onClickEdit,
  onMouseEnter,
  onMouseLeave,
  hoveredClass,
  arrayPartData,
  part,
}: ColumnsProps) => {
  const column: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "make", headerName: "Make", width: 130 },
    {
      field: "code",
      headerName: "Code",
      width: 130,
      filterable: true,
      sortComparator: (v1, v2) => {
        if (v1.includes("JT") && v2.includes("JT")) {
          const num1 = parseInt(v1.slice(3));
          const num2 = parseInt(v2.slice(3));
          return num1 - num2;
        }
        return 0;
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
                : data.ligthColor
            }`}
          >
            {data.headerName}
          </div>
        ),
      };
    }) as GridColDef[]),
    {
      field: "link",
      headerName: "Link",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <a target="_blank" href={params.row.link}>
          <LaunchIcon />
          <span> See more</span>
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
