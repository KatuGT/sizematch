import { GridColDef, GridCellParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const narrowSplineColumn: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 70, sortable: false },
  { field: "make", headerName: "Make", width: 130, sortable: false },
  { field: "code", headerName: "Code", width: 130 },
  {
    field: "a_innerMinimumDiameter",
    headerName: "A",
    width: 90,
    sortable: false,
  },
  {
    field: "b_innerTeethNumber",
    headerName: "B",
    width: 90,
    sortable: false,
  },
  {
    field: "c_innerMaximumDiameter",
    headerName: "C",
    width: 90,
    sortable: false,
  },
  {
    field: "d_width",
    headerName: "D",
    sortable: false,
    width: 90,
  },
  {
    field: "e_chain",
    headerName: "E",
    sortable: false,
    width: 90,
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
    //   renderCell: (params) => (
    //     <div className="flex flex-col items-stretch justify-between p-2 text-white">
    //       <button
    //         onClick={() => handleDelete(params.row._id)}
    //         className="flex items-center justify-between"
    //       >
    //         <DeleteIcon color="error" /> <span>Delete</span>
    //       </button>
    //       <button
    //         onClick={() => console.log(params.row._id)}
    //         className="flex items-center justify-between"
    //       >
    //         <EditIcon color="info" />
    //         <span>Edit</span>
    //       </button>
    //     </div>
    //   ),
  },
];

interface ColumnsProps {
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
}

export const getNarrowSplineConfigColumn = ({ onClickDelete, onClickEdit }: ColumnsProps) => {
  const updatedColumns = narrowSplineColumn.map((column) => {
    if (column.field === "actions") {
      return {
        ...column,
        renderCell: (params: GridCellParams) => (
          <div className="flex flex-col items-stretch justify-between p-2 text-white">
            <button
              onClick={() =>  onClickDelete(params.row._id)}
              className="flex items-center justify-between"
            >
              <DeleteIcon color="error" /> <span>Delete</span>
            </button>
            <button
              onClick={onClickEdit}
              className="flex items-center justify-between"
            >
              <EditIcon color="info" />
              <span>Edit</span>
            </button>
          </div>
        ),
      };
    }
    return column;
  });

  return updatedColumns;
};
