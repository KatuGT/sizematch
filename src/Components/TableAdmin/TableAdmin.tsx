import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridColDef, GridOverlay } from "@mui/x-data-grid";
import useSWR from "swr";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

import { ObjectId } from "mongodb";
import Swal from "sweetalert2";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import {
  GetNarrowSplineConfigColumn,
  getLargeSplineConfigColumn,
} from "@/utils/ColumnConfig/Admin/frontSprocketColumnsAdmin";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SearchResult } from "@/types-enums-interfaces/FSlargeSplineProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";

const TableAdmin = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  const { state: partState } = useContext(SelectedPartContext);
  const { frontSprocket } = partState;

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<SearchResult[]>;

  const { data, mutate, isLoading } = useSWR<SearchResult[]>(
    `http://localhost:3000/api/parts?part=${frontSprocket}`,
    fetcher
  );

  let searchResults: SearchResult[] = data || [];

  const [columns, setColumns] = useState<GridColDef[]>([]);

  const { dispatch: EditingModeDispatch, } =
    useContext(EditingModeContext);

  useEffect(() => {
    const handleEdit = async (part: string, id: string | ObjectId) => {
      EditingModeDispatch({
        type: "EDIT_MODE",
        payload: true,
        id: id.toString(),
        part: part,
      });
    };

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

    const columnsFSnarrowSpline = GetNarrowSplineConfigColumn({
      hoveredClass: hoveredClass,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClickDelete: handleDelete,
      onClickEdit: handleEdit,
    });

    const columnsFSlargeSpline = getLargeSplineConfigColumn({
      hoveredClass: hoveredClass,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClickDelete: handleDelete,
      onClickEdit: handleEdit,
    });

    const gridCol =
      frontSprocket === possibleParts.FSNarrowSpline
        ? columnsFSnarrowSpline
        : columnsFSlargeSpline;
    setColumns(gridCol);
  }, [
    EditingModeDispatch,
    frontSprocket,
    hoveredClass,
    mutate,
    onMouseEnter,
    onMouseLeave,
  ]);

  return (
    <div
      style={{ height: 400, width: "min-content" }}
      className="mx-auto mt-5 bg-gray-800 text-white"
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
        loading={isLoading}
        slots={{
          noRowsOverlay: () => <GridOverlay> No results</GridOverlay>,

          loadingOverlay: () => <GridOverlay>Wait a second...</GridOverlay>,
        }}
      />
    </div>
  );
};

export default TableAdmin;
