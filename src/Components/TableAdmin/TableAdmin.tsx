'use client'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import useSWR from "swr";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { ObjectId } from "mongodb";
import Swal from "sweetalert2";
import { SelectedPartContext } from "@/Context/SelectedPartContext/SelectedPartContext";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";
import {
  FSlargeSplineTable,
  FSnarrowSplineTable,
  GetBAdminColumnConfigColumn,
  brakeDiscTable,
  connectingRodTable,
  pistonKitTable,
  rearSprocketTable,
  valveTable,
} from "@/utils";

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
    `/api/parts?part=${selectedPart}`,
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

  const columnsConfig = useMemo(() => {
    return {
      [possibleParts.FSLargeSpline]: FSlargeSplineTable,
      [possibleParts.FSNarrowSpline]: FSnarrowSplineTable,
      [possibleParts.RearSprocket]: rearSprocketTable,
      [possibleParts.BrakeDisc]: brakeDiscTable,
      [possibleParts.ConnectingRods]: connectingRodTable,
      [possibleParts.PistonKit]: pistonKitTable,
      [possibleParts.Valve]: valveTable,
    };
  }, []);

  const columns = useMemo(() => {
    return GetBAdminColumnConfigColumn({
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClickDelete: handleDelete,
      onClickEdit: handleEdit,
      hoveredClass: hoveredClass,
      arrayPartData: columnsConfig[selectedPart],
      part: selectedPart,
    });
  }, [
    columnsConfig,
    handleDelete,
    handleEdit,
    hoveredClass,
    onMouseEnter,
    onMouseLeave,
    selectedPart,
  ]);
  
  return (
    
    <div className="mx-auto mt-5 h-[400px] w-full bg-gray-800 text-white">
      <DataGrid
        rows={searchResults}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "code",
                sort: "asc",
              },
            ],
          },
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
        sx={{
          color: "#fff",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#020617",
          },
          "& .MuiDataGrid-row:nth-child(even)": {
            backgroundColor: "#1e293b",
          },
          "& .MuiDataGrid-cell:nth-child(n+3)": {
            justifyContent: "center",
          },
        }}
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
