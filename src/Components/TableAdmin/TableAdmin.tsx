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
  const { frontSprocket } = partState;
  
  const { dispatch: sharedValueDispatch } = useContext(SharedValuesContext);

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<any[]>;

  const { data, mutate, isLoading } = useSWR<any[]>(
    `http://localhost:3000/api/parts?part=${frontSprocket}`,
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
  // useEffect(() => {

  //   const gridCol =
  //     frontSprocket === possibleParts.FSNarrowSpline
  //       ? columnsFSnarrowSpline
  //       : columnsFSlargeSpline;
  //   setColumns(gridCol);
  // }, [
  //   frontSprocket,
  //   handleDelete,
  //   handleEdit,
  //   hoveredClass,
  //   mutate,
  //   onMouseEnter,
  //   onMouseLeave,
  // ]);

  const singlePartfetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<any>;

  const { data: singlePart } = useSWR(
    id ? `http://localhost:3000/api/parts/${part}/${id}` : null,
    singlePartfetcher
  );

  useEffect(() => {
    if (frontSprocket === possibleParts.FSNarrowSpline) {
      sharedValueDispatch({
        type: "SET_DATA",
        payload: {
          code: singlePart?.code,
          make: singlePart?.make,
          link: singlePart?.link,
          a_innerMinimumDiameter: singlePart?.a_innerMinimumDiameter,
          b_innerTeethNumber: singlePart?.b_innerTeethNumber,
          c_innerMaximumDiameter: singlePart?.c_innerMaximumDiameter,
          d_width: singlePart?.d_width,
          e_chain: singlePart?.e_chain,
        },
        group: "FSNarrowSpline",
      });
    } else if (frontSprocket === possibleParts.FSLargeSpline) {
      sharedValueDispatch({
        type: "SET_DATA",
        payload: {
          code: singlePart?.code,
          make: singlePart?.make,
          link: singlePart?.link,
          a_innerMinimumDiameter: singlePart?.a_innerMinimumDiameter,
          b_innerTeethSpacing: singlePart?.b_innerTeethSpacing,
          c_innerMaximumDiameter: singlePart?.c_innerMaximumDiameter,
          d_centerToCenter: singlePart?.d_centerToCenter,
          e_chain: singlePart?.e_chain,
          f_chain: singlePart?.f_chain,
        },
        group: "FSLargeSpline",
      });
    }
  }, [data, frontSprocket, sharedValueDispatch, singlePart]);

  return (
    <div
      style={{ height: 400, width: "min-content" }}
      className="mx-auto mt-5 bg-gray-800 text-white"
    >
      {frontSprocket === possibleParts.FSNarrowSpline ? (
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
