"use client";
import React, { useContext } from "react";
import useSWR from "swr";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { useHover } from "@/utils";
import TableRecomendations from "@/Components/TableRecomendations";
import { BrakeDisc as BrakeDiscSVG } from "@/Components";
import { SearchResultBrakeDisc } from "@/types-enums-interfaces/BrakeDiscProps";
import { GetBrakeDiscConfigColumnUser } from "@/utils/ColumnConfig/Users/BrakeDisc";
import CreateParams from "@/utils/createParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Match - Brake Disc",
  description: "Find the perfect fit for your brake disc.",
};

const BrakeDisc = () => {
  const { state } = useContext(SharedValuesContext);
  const { brakeDisc } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<
      SearchResultBrakeDisc[]
    >;

  const params = CreateParams({ data: brakeDisc });

  const { data, isLoading } = useSWR<SearchResultBrakeDisc[]>(
    params
      ? `http://localhost:3000/api/search/${possibleParts.BrakeDisc}/${params}`
      : null,
    fetcher
  );

  let searchResults: SearchResultBrakeDisc[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  const columnBrakeDisc = GetBrakeDiscConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-[max-content]">
      <BrakeDiscSVG
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
            columns={columnBrakeDisc}
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

export default BrakeDisc;
