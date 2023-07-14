"use client";
import React, { useContext, useState } from "react";
import useSWR from "swr";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import {
  FSNarrowSplinesizeProps,
  SearchResultFSNarrowSpline,
} from "@/types-enums-interfaces/FSnarrowSplineProps";
import {
  GetLSConfigColumnUser,
  GetNSConfigColumnUser,
  useHover,
} from "@/utils";
import { FSLargeSpline, FSNarrowSpline } from "@/Components";
import { FSlargeSplinesizeProps } from "@/types-enums-interfaces/FSlargeSplineProps";
import TableRecomendations from "@/Components/TableRecomendations";
import CreateParams from "@/utils/createParams";

const FrontSprocket = () => {
  const { state } = useContext(SharedValuesContext);
  const { fsNarrowSpline, fsLargeSpline } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  //Setea tipo de piñon
  const [frontSprocketType, setFrontSprocketType] = useState(
    possibleParts.FSNarrowSpline
  );

  const columnNarrowSpline = GetNSConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });

  const columLargeSpline = GetLSConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
  });

  const handleSprocketType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrontSprocketType(e.target.value as possibleParts);
  };

  //fetch
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<
      SearchResultFSNarrowSpline[]
    >;

  const dataToParams =
    frontSprocketType === possibleParts.FSNarrowSpline
      ? fsNarrowSpline
      : fsLargeSpline;

  const params = CreateParams({ data: dataToParams });
  
  const { data, isLoading } = useSWR<SearchResultFSNarrowSpline[]>(
    params
      ? `http://localhost:3000/api/search/${frontSprocketType}/${params}`
      : null,
    fetcher
  );

  let searchResults: SearchResultFSNarrowSpline[] = data || [];

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-[min-content]">
      <div>
        <ul className="mb-10 w-[max-content] items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
          <li className="w-[max-content] border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
            <div className="flex items-center px-3">
              <input
                id="horizontal-list-radio-narrow-spline"
                type="radio"
                value={possibleParts.FSNarrowSpline}
                name="splineType"
                checked={frontSprocketType === possibleParts.FSNarrowSpline}
                onChange={(e) => handleSprocketType(e)}
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor="horizontal-list-radio-narrow-spline"
                className="ml-2 w-[max-content]  py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Narrow spline
              </label>
            </div>
          </li>
          <li className="w-[max-content]  border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
            <div className="flex items-center px-3">
              <input
                id="horizontal-list-radio-large-spline"
                type="radio"
                name="splineType"
                checked={frontSprocketType === possibleParts.FSLargeSpline}
                value={possibleParts.FSLargeSpline}
                onChange={(e) => handleSprocketType(e)}
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor="horizontal-list-radio-large-spline"
                className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Large spline
              </label>
            </div>
          </li>
        </ul>
      </div>
      {frontSprocketType === possibleParts.FSNarrowSpline ? (
        <FSNarrowSpline
          control={control}
          errors={errors}
          hoveredClass={hoverClass}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <FSLargeSpline
          control={control}
          errors={errors}
          hoveredClass={hoverClass}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        />
      )}

      <div className="my-20  w-full text-white">
        <TableRecomendations />
        <div className="bg-gray-80 h-[400px]">
          {frontSprocketType === possibleParts.FSNarrowSpline ? (
            <DataGrid
              rows={searchResults}
              columns={columnNarrowSpline}
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
                loadingOverlay: () => (
                  <GridOverlay>Wait a second...</GridOverlay>
                ),
              }}
            />
          ) : (
            <DataGrid
              rows={searchResults}
              columns={columLargeSpline}
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
                loadingOverlay: () => (
                  <GridOverlay>Wait a second...</GridOverlay>
                ),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontSprocket;
