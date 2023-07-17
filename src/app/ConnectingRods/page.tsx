"use client";
import React, { useContext, useState } from "react";
import useSWR from "swr";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import {
  useHover,
} from "@/utils";
// import { ConnectingRod } from "@/Components";
import TableRecomendations from "@/Components/TableRecomendations";
import CreateParams from "@/utils/createParams";
import { SearchResultConnectingRod } from "@/types-enums-interfaces/ConnectingRodProps";
import { GetConnectingRodConfigColumnUser } from "@/utils/ColumnConfig/Users/ConnectingRod";
import { ConnectingRod } from "@/Components";

const ConnectingRods = () => {
  const { state } = useContext(SharedValuesContext);
  const { connectingRod } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnRearSprocket = GetConnectingRodConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<
      SearchResultConnectingRod[]
    >;

  // const params = transformToParams();
  const params = CreateParams({data: connectingRod});
  
  const { data, isLoading } = useSWR<SearchResultConnectingRod[]>(
    params
      ? `http://localhost:3000/api/search/${possibleParts.ConnectingRods}/${params}`
      : null,
    fetcher
  );

  let searchResults: SearchResultConnectingRod[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-[max-content]">
      <ConnectingRod
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <div className="my-20  w-full text-white">
        <TableRecomendations />
        <div className="bg-gray-80 h-[400px]">
          <DataGrid
            rows={searchResults}
            columns={columnRearSprocket}
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
              noRowsOverlay: () =>
                !params ? (
                  <GridOverlay>Nothing to show</GridOverlay>
                ) : (
                  <GridOverlay> No results</GridOverlay>
                ),
              noResultsOverlay: () => <div>No results</div>,
              loadingOverlay: () => <GridOverlay>Wait a second...</GridOverlay>,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ConnectingRods