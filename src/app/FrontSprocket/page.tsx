"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useSWR from "swr";
import { DataGrid, GridColDef, GridOverlay } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import {
  FSNarrowSplinesizeProps,
  SearchResult,
} from "@/types-enums-interfaces/FSnarrowSplineProps";
import {
  frontSprocketNarrowSplineSchema,
  generateSchema,
  getLSConfigColumnUser,
  getNSConfigColumnUser,
  useHover,
} from "@/utils";
import { FSLargeSpline, FSNarrowSpline } from "@/Components";

const FrontSprocket = () => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { fsNarrowSpline, fsLargeSpline } = state;

  //actualiza context

  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  //crea params para el fetch
  const transformToParams = useCallback(() => {
    let count = 0;
    let params = "";

    for (const key in fsNarrowSpline) {
      if (
        fsNarrowSpline.hasOwnProperty(key) &&
        fsNarrowSpline[key as keyof FSNarrowSplinesizeProps] !== ""
      ) {
        count++;
        if (count > 1) {
          params += "&";
        }
        params += `${key}=${encodeURIComponent(
          fsNarrowSpline[key as keyof FSNarrowSplinesizeProps]
        )}`;
      }
    }
    if (count < 2) {
      params = "";
    }
    return params;
  }, [fsNarrowSpline]);

  //Setea tipo de piñon
  const [frontSprocketType, setFrontSprocketType] = useState(
    possibleParts.FSNarrowSpline
  );

  const handleFSChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      const newValue = value.replace(/[^0-9.]/g, "");

      dispatch({
        type: name,
        payload: newValue,
        group:
          frontSprocketType === "frontSprocketNarrowSpline"
            ? "FSNarrowSpline"
            : "FSLageSpline",
      });
    },
    [dispatch, frontSprocketType]
  );

  const columnNarrowSpline = getNSConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    onChange: handleFSChange,
    dataNarrowSpline: fsNarrowSpline,
  });

  const columLargeSpline = getLSConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    onChange: handleFSChange,
    dataLargeSpline: fsLargeSpline,
  });

  const [columns, setColumns] = useState<GridColDef[]>(columnNarrowSpline);

  const handleSprocketType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrontSprocketType(e.target.value as possibleParts);
    const updatedColumns =
      frontSprocketType === possibleParts.FSNarrowSpline
        ? columnNarrowSpline
        : columLargeSpline;
    setColumns(updatedColumns);
  };

  //fetch
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<SearchResult[]>;

  const params = transformToParams();

  const { data, isLoading } = useSWR<SearchResult[]>(
    params
      ? `http://localhost:3000/api/search/${frontSprocketType}/${params}`
      : null,
    fetcher
  );

  let searchResults: SearchResult[] = data || [];

  const completeSchema = generateSchema(frontSprocketNarrowSplineSchema);

  const {
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(completeSchema),
    mode: "onBlur",
  });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-[min-content]">
      <div>
        <ul className="w-[max-content] mb-10 items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
          <li className="w-[max-content] border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
            <div className="flex items-center px-3">
              <input
                id="horizontal-list-radio-narrow-spline"
                type="radio"
                value={possibleParts.FSNarrowSpline}
                name="splineType"
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

      <div className="my-20 h-[400px] w-full bg-gray-800 text-white">
        <DataGrid
          rows={searchResults}
          columns={columns}
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
  );
};

export default FrontSprocket;
