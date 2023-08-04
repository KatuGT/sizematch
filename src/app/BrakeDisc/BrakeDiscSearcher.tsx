"use client";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultBrakeDisc } from "@/types-enums-interfaces/BrakeDiscProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { GetUserColumnConfig, brakeDiscTable, useHover } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { BrakeDisc as BrakeDiscSVG, TableRecomendations } from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import { alpha, styled } from "@mui/material/styles";

const BrakeDiscSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { brakeDisc } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<
      SearchResultBrakeDisc[]
    >;

  const params = CreateParams({ data: brakeDisc });

  const { data, isLoading } = useSWR<SearchResultBrakeDisc[]>(
    params ? `/api/search/${possibleParts.BrakeDisc}/${params}` : null,
    fetcher
  );

  let searchResults: SearchResultBrakeDisc[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  const columnBrakeDisc = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: brakeDisc,
    part: possibleParts.BrakeDisc,
    arrayPartData: brakeDiscTable,
  });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-full laptop:max-w-[min-content]">
      <BrakeDiscSVG
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
      <div className="my-20  w-full text-white">
        <TableRecomendations />
        <div className="bg-gray-80 mb-20  h-[400px]">
          <DataGrid
            rows={searchResults}
            columns={columnBrakeDisc}
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
              "& .MuiDataGrid-columnHeaders":{
                backgroundColor: "#020617",

              },
              "& .MuiDataGrid-row:nth-child(even)": {
                backgroundColor: "#1e293b",
              },
              "& .MuiDataGrid-cell:nth-child(n+3)":{
                justifyContent: 'center'
              }
            }}
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
        <MeasurementDistributionTips />
      </div>
    </div>
  );
};

export default BrakeDiscSearcher;
