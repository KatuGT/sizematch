"use client";
import React, { useContext } from "react";
import useSWR from "swr";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { GetValveConfigColumnUser, useHover } from "@/utils";
import TableRecomendations from "@/Components/TableRecomendations";
import {} from "@/types-enums-interfaces/RearSprocketProps";
import { Valve as ValveSVG } from "@/Components";
import CreateParams from "@/utils/createParams";
import { SearchResultValve } from "@/types-enums-interfaces/ValveProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Match - Rear Sprocket",
  description: "Find the perfect fit for your valves",
};
const Valve = () => {
  const { state } = useContext(SharedValuesContext);
  const { valve } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnValve = GetValveConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<SearchResultValve[]>;

  // const params = transformToParams();
  const params = CreateParams({ data: valve });

  const { data, isLoading } = useSWR<SearchResultValve[]>(
    params
      ? `/api/search/${possibleParts.Valve}/${params}`
      : null,
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
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-[max-content]">
      <ValveSVG
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
            columns={columnValve}
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
  );
};

export default Valve;
