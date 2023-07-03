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
import {
  getLargeSplineConfigColumn,
  getNarrowSplineConfigColumn,
} from "@/utils/ColumnConfig/frontSprocketColumns";

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

  const handleDelete = async (id: string | ObjectId) => {
    Swal.fire({
      title: "Do you want to dalete this part?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      denyButtonText: `Don't delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/parts/${frontSprocket}/${id}`, {
          method: "DELETE",
        });
        mutate();
        Swal.fire("Borrado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

 
  const columnsFSnarrowSpline = getNarrowSplineConfigColumn({
    onClickDelete: handleDelete,
    onClickEdit: () => {
      // Handle edit logic here
    },
  });

  const columnsFSlargeSpline = getLargeSplineConfigColumn({
    onClickDelete: handleDelete,
    onClickEdit: () => {
      // Handle edit logic here
    },
  });
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
