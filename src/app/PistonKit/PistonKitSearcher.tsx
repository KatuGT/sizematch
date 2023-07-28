"use client";
import { TableRecomendations } from "@/Components";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultPistonKit } from "@/types-enums-interfaces/PistonKitProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useHover, GetPistonKitConfigColumnUser } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { PistonKit as PistonKitSVG } from "@/Components";

const PistonKitSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { pistonKit } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnPistonKit = GetPistonKitConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<
      SearchResultPistonKit[]
    >;

  // const params = transformToParams();
  const params = CreateParams({ data: pistonKit });

  const { data, isLoading } = useSWR<SearchResultPistonKit[]>(
    params ? `/api/search/${possibleParts.PistonKit}/${params}` : null,
    fetcher
  );

  let searchResults: SearchResultPistonKit[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4">
      <PistonKitSVG
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <div className="my-20 w-full text-white laptop:mx-auto laptop:max-w-[min-content]">
        <TableRecomendations />
        <div className="bg-gray-80 h-[400px]">
          <DataGrid
            rows={searchResults}
            columns={columnPistonKit}
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

export default PistonKitSearcher;
