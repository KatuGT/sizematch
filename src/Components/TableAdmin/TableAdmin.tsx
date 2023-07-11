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
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";

const TableAdmin = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  const { dispatch: EditingModeDispatch, state: editingModeState } =
    useContext(EditingModeContext);
  const { id, part, editingMode } = editingModeState;

  const { state: partState } = useContext(SelectedPartContext);
  const { selectedPart } = partState;
  
  const { dispatch: sharedValueDispatch } = useContext(SharedValuesContext);

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<any[]>;

  const { data, mutate, isLoading } = useSWR<any[]>(
    `http://localhost:3000/api/parts?part=${selectedPart}`,
    fetcher
  );
  
  let searchResults: any[] = data || [];
  
  useEffect(() => {
    mutate();
    if (!editingMode) {
      sharedValueDispatch({
        type: "",
        group: "RESET_VALUES",
        payload: "",
      });
    }
  }, [editingMode, mutate, sharedValueDispatch]);

  const handleEdit = async (part: string, partData:any) => {
    EditingModeDispatch({
      type: "EDIT_MODE",
      payload: true,
      id: partData._id,
      part: part,
    });

    sharedValueDispatch({
      group: part as possibleParts,
      payload: {
            ...partData
      },
      type: 'SET_DATA'
    })
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
        await fetch(`/api/parts/${selectedPart}/${id}`, {
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

  return (
    <div
      className="mx-auto mt-5 bg-gray-800 text-white h-[400px] w-full"
    >
      {selectedPart === possibleParts.FSNarrowSpline ? (
        <DataGrid
          rows={searchResults}
          columns={columnsFSnarrowSpline}
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
      ) : (
        <DataGrid
          rows={searchResults}
          columns={columnsFSlargeSpline}
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
      )}
    </div>
  );
};

export default TableAdmin;
