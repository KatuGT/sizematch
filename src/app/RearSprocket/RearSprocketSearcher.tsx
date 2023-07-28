"use client";
import { TableRecomendations } from "@/Components";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultRearSprocket } from "@/types-enums-interfaces/RearSprocketProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useHover, GetRearSprocketConfigColumnUser } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { RearSprocket as RearSprocketSVG } from "@/Components";

const RearSprocketSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { rearSprocket } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnRearSprocket = GetRearSprocketConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<
      SearchResultRearSprocket[]
    >;

  // const params = transformToParams();
  const params = CreateParams({ data: rearSprocket });

  const { data, isLoading } = useSWR<SearchResultRearSprocket[]>(
    params ? `/api/search/${possibleParts.RearSprocket}/${params}` : null,
    fetcher
  );

  let searchResults: SearchResultRearSprocket[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-[max-content]">
      <RearSprocketSVG
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
  );
};

export default RearSprocketSearcher;
