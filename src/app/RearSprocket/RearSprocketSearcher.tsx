"use client";
import { TableRecomendations } from "@/Components";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultRearSprocket } from "@/types-enums-interfaces/RearSprocketProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useHover, GetUserColumnConfig, rearSprocketTable } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { RearSprocket as RearSprocketSVG } from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import Adsterra from "@/Components/Adsterra";
import { filterData } from "@/utils/filteredData";

const RearSprocketSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { rearSprocket } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnRearSprocket = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: rearSprocket,
    part: possibleParts.RearSprocket,
    arrayPartData: rearSprocketTable,
  });

  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/RearSprocket.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  useEffect(() => {
    if (data && data?.length === 0) return;
    setFilteredData(filterData(data, rearSprocket as any));
  }, [data, rearSprocket]);

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-full laptop:max-w-[min-content]">
      <Adsterra />

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
            rows={filteredData}
            columns={columnRearSprocket}
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
        </div>
      </div>
      <MeasurementDistributionTips />
    </div>
  );
};

export default RearSprocketSearcher;
