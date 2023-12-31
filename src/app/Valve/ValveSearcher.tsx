"use client";
import { TableRecomendations } from "@/Components";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultValve } from "@/types-enums-interfaces/ValveProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useHover, GetUserColumnConfig, valveTable } from "@/utils";
import CreateParams from "@/utils/createParams";
import {
  DataGrid,
  GridOverlay,
} from "@mui/x-data-grid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { Valve as ValveSVG } from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import Adsterra from "@/Components/Adsterra";

const ValveSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { valve } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnValve = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: valve,
    part: possibleParts.Valve,
    arrayPartData: valveTable,
  });

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<SearchResultValve[]>;

  // const params = transformToParams();
  const params = CreateParams({ data: valve });

  const { data, isLoading } = useSWR<SearchResultValve[]>(
    params ? `/api/search/${possibleParts.Valve}/${params}` : null,
    fetcher
  );

  let searchResults: SearchResultValve[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:max-w-[min-content]">
      <Adsterra />

      <ValveSVG
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <div className="my-20  mb-20 w-full text-white">
        <TableRecomendations />

        <div className="bg-gray-80 mb-20 mt-5 h-[400px]">
          <DataGrid
            rows={searchResults}
            columns={columnValve}
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
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#1e293b",
              },
              "& .MuiDataGrid-cell:nth-of-type(n+3)": {
                justifyContent: "center",
              },
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

export default ValveSearcher;
