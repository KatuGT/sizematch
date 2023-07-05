"use client";
import React, { useCallback, useContext, useEffect } from "react";
import useSWR from "swr";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import FSNarrowSpline from "@/Components/SVGwithInputs/FSNarrowSpline";
import { useForm } from "react-hook-form";
import { generateSchema } from "@/utils/generateYupSchema";
import { frontSprocketNarrowSplineSchema } from "@/utils/yupSchemas/FSNarrowSpline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHover } from "@/utils/handleHoveredSize";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { FSNarrowSplineTableData } from "@/utils/TableHeadData/FSNarrowSpline";
import {
  FSNarrowSplinesizeProps,
  SearchResult,
} from "@/types-enums-interfaces/FSnarrowSplineProps";
import { getNarrowSplineConfigColumn } from "@/utils/ColumnConfig/frontSprocketColumnsAdmin";
import { DataGrid, GridNoRowsOverlay, GridOverlay } from "@mui/x-data-grid";
import { getNSConfigColumnUser } from "@/utils/ColumnConfig/frontSprocketColumnsUsers";

const FrontSprocket = () => {
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const { dispatch, state } = useContext(SharedValuesContext);
  const { fsNarrowSpline } = state;

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

  useEffect(() => {
    transformToParams();
  }, [fsNarrowSpline, transformToParams]);

  const handleFSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");
    
    dispatch({
      type: name,
      payload: newValue,
      group: "FSNarrowSpline",
    });
  };

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()) as Promise<SearchResult[]>;

  const params = transformToParams();

  const { data, isLoading } = useSWR<SearchResult[]>(
    params
      ? `http://localhost:3000/api/search/${possibleParts.FSNarrowSpline}/${params}`
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

  const column = getNSConfigColumnUser({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    onChange: handleFSChange,
    data: fsNarrowSpline
  });

   return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center   p-4 laptop:w-[min-content]">
      <FSNarrowSpline
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
      <div className="mb-10 mt-5 h-[400px] w-full bg-gray-800 text-white">
        <DataGrid
          rows={searchResults}
          columns={column}
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
