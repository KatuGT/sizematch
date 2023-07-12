import React, { useCallback, useContext, useEffect, useState } from "react";
import { DataGrid, GridColDef, GridOverlay } from "@mui/x-data-grid";
import useSWR from "swr";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

import { ObjectId } from "mongodb";
import Swal from "sweetalert2";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import {
  GetNarrowSplineConfigColumn,
  GetLargeSplineConfigColumn,
} from "@/utils/ColumnConfig/Admin/frontSprocketColumnsAdmin";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";
import { GetRearSprocketConfigColumn } from "@/utils/ColumnConfig/Admin/rearSprocherColumnsAdmin";

const TableAdmin = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  const { dispatch: EditingModeDispatch, state: editingModeState } =
    useContext(EditingModeContext);
  const { editingMode } = editingModeState;

  const { state: partState } = useContext(SelectedPartContext);
  const { selectedPart } = partState;

  const { dispatch: sharedValueDispatch } = useContext(SharedValuesContext);

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<any[]>;

  const { data, mutate, isLoading } = useSWR<any[]>(
    `http://localhost:3000/api/parts?part=${selectedPart}`,
    fetcher
  );

  useEffect(() => {
    mutate();
  }, [data, mutate]);

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
  }, [sharedValueDispatch, editingMode, selectedPart, mutate]);

  const handleEdit = useCallback(
    async (part: string, partData: any) => {
      EditingModeDispatch({
        type: "EDIT_MODE",
        payload: true,
        id: partData._id,
        part: part,
      });

      sharedValueDispatch({
        group: part as possibleParts,
        payload: {
          ...partData,
        },
        type: "SET_DATA",
      });
    },
    [EditingModeDispatch, sharedValueDispatch]
  );

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
          await fetch(`/api/parts/${selectedPart}/${id}`, {
            method: "DELETE",
          });
          mutate();
          Swal.fire("Borrado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
    [mutate, selectedPart]
  );

  const columnsFSnarrowSpline = useCallback(() => {
    return GetNarrowSplineConfigColumn({
      hoveredClass: hoveredClass,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClickDelete: handleDelete,
      onClickEdit: handleEdit,
    });
  }, [handleDelete, handleEdit, hoveredClass, onMouseEnter, onMouseLeave]);

  const columnsFSlargeSpline = useCallback(() => {
    return GetLargeSplineConfigColumn({
      hoveredClass: hoveredClass,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClickDelete: handleDelete,
      onClickEdit: handleEdit,
    });
  }, [handleDelete, handleEdit, hoveredClass, onMouseEnter, onMouseLeave]);

  const columnsRearSprocket = useCallback(() => {
    return GetRearSprocketConfigColumn({
      hoveredClass: hoveredClass,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClickDelete: handleDelete,
      onClickEdit: handleEdit,
    });
  }, [handleDelete, handleEdit, hoveredClass, onMouseEnter, onMouseLeave]);

  const [columns, setColumns] = useState(columnsFSnarrowSpline);

  useEffect(() => {
    switch (selectedPart) {
      case possibleParts.FSLargeSpline:
        setColumns(columnsFSlargeSpline);
        break;
      case possibleParts.FSNarrowSpline:
        setColumns(columnsFSnarrowSpline);
        break;
      case possibleParts.RearSprocket:
        setColumns(columnsRearSprocket);
        break;
      default:
        break;
    }
  }, [
    columnsFSlargeSpline,
    columnsFSnarrowSpline,
    columnsRearSprocket,
    selectedPart,
  ]);

  return (
    <div className="mx-auto mt-5 h-[400px] w-full bg-gray-800 text-white">
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
