"use client";

import React, { useContext, useEffect, useState } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultFSNarrowSpline } from "@/types-enums-interfaces/FSnarrowSplineProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import {
  FSlargeSplineTable,
  FSnarrowSplineTable,
  GetUserColumnConfig,
  useHover,
} from "@/utils";
import CreateParams from "@/utils/createParams";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import {
  FSLargeSpline,
  FSNarrowSpline,
  TableRecomendations,
} from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import Adsterra from "@/Components/Adsterra";
import { filterData } from "@/utils/filteredData";

const FrontSprocketSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { fsNarrowSpline, fsLargeSpline } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  //Setea tipo de piñon
  const [frontSprocketType, setFrontSprocketType] = useState(
    possibleParts.FSNarrowSpline
  );

  const columnNarrowSpline = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: fsNarrowSpline,
    part: possibleParts.FSNarrowSpline,
    arrayPartData: FSnarrowSplineTable,
  });

  const columLargeSpline = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: fsLargeSpline,
    part: possibleParts.FSLargeSpline,
    arrayPartData: FSlargeSplineTable,
  });

  const handleSprocketType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrontSprocketType(e.target.value as possibleParts);
  };

  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (frontSprocketType === possibleParts.FSNarrowSpline) {
      fetch("/data/FSNarrowSpline.json")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error("Error cargando JSON:", err));
    } else {
      fetch("/data/FSLargeSpline.json")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error("Error cargando JSON:", err));
    }
  }, [frontSprocketType]);

  useEffect(() => {
    if (data && data?.length === 0) return;

    setFilteredData(
      filterData(
        data,
        frontSprocketType === possibleParts.FSNarrowSpline
          ? (fsNarrowSpline as any)
          : (fsLargeSpline as any)
      )
    );
  }, [data, fsNarrowSpline, fsLargeSpline, frontSprocketType]);

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
        <div className="bg-gray-80 mb-20 h-[400px]">
          {frontSprocketType === possibleParts.FSNarrowSpline ? (
            <DataGrid
              rows={filteredData}
              columns={columnNarrowSpline}
              getRowId={(row) => row._id.$oid}
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
            />
          ) : (
            <DataGrid
              rows={filteredData}
              columns={columLargeSpline}
              getRowId={(row) => row._id.$oid}
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
            />
          )}
        </div>
        <MeasurementDistributionTips />
      </div>
    </div>
  );
};

export default FrontSprocketSearcher;
