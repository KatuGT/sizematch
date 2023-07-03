import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { SearchResult } from "@/types-enums-interfaces/FSnarrowSplineProps";
import useSWR from "swr";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ObjectId } from "mongodb";
import Swal from "sweetalert2";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import { getNarrowSplineConfigColumn } from "@/utils/ColumnConfig/frontSprocketColumns";

const TableAdmin = () => {
  const { state } = useContext(SelectedPartContext);
  const { frontSprocket } = state;

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<SearchResult[]>;

  const { data, mutate } = useSWR<SearchResult[]>(
    `http://localhost:3000/api/parts/${frontSprocket}`,
    fetcher
  );

  let searchResults: SearchResult[] = data || [];

  const handleDelete = useCallback(
    async (id: string | ObjectId) => {
      Swal.fire({
        title: "Do you want to dalete this part?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
        denyButtonText: `Don't delete`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await fetch(`/api/parts/${possibleParts.FSNarrowSpline}/${id}`, {
            method: "DELETE",
          });
          mutate();
          Swal.fire("Borrado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
    [mutate]
  );

  const columnsFSnarrowSpline: GridColDef[] = useMemo(
    () => [
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
        renderCell: (params) => (
          <div className="flex flex-col items-stretch justify-between p-2 text-white">
            <button
              onClick={() => handleDelete(params.row._id)}
              className="flex items-center justify-between"
            >
              <DeleteIcon color="error" /> <span>Delete</span>
            </button>
            <button
              onClick={() => console.log(params.row._id)}
              className="flex items-center justify-between"
            >
              <EditIcon color="info" />
              <span>Edit</span>
            </button>
          </div>
        ),
      },
    ],
    [handleDelete]
  );

  const columnsFSlargeSpline: GridColDef[] = useMemo(
    () => [
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
        field: "b_innerTeethSpacing",
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
        field: "d_centerToCenter",
        headerName: "D",
        sortable: false,
        width: 90,
      },
      {
        field: "e_width",
        headerName: "E",
        sortable: false,
        width: 90,
      },
      {
        field: "f_chain",
        headerName: "F",
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
        renderCell: (params) => (
          <div className="flex flex-col items-stretch justify-between p-2 text-white">
            <button
              onClick={() => handleDelete(params.row._id)}
              className="flex items-center justify-between"
            >
              <DeleteIcon color="error" /> <span>Delete</span>
            </button>
            <button
              onClick={() => console.log(params.row._id)}
              className="flex items-center justify-between"
            >
              <EditIcon color="info" />
              <span>Edit</span>
            </button>
          </div>
        ),
      },
    ],
    [handleDelete]
  );

  // const gridCol = getNarrowSplineConfigColumn(handleDelete);


  const [columns, setColumns] = useState(columnsFSnarrowSpline);

  useEffect(() => {
    const gridCol =
      frontSprocket === possibleParts.FSNarrowSpline
        ? columnsFSnarrowSpline
        : columnsFSlargeSpline;
    setColumns(gridCol);
  }, [columnsFSlargeSpline, columnsFSnarrowSpline, frontSprocket]);

  return (
    <div
      style={{ height: 400, width: "100%" }}
      className="mt-5 bg-gray-800 text-white"
    >
      <DataGrid
        rows={searchResults}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
          columns: {
            columnVisibilityModel: {
              status: false,
              _id: false,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{ color: "#fff" }}
      />
    </div>
  );
};

export default TableAdmin;
