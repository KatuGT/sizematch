"use client";
import { TableRecomendations } from "@/Components";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultPistonKit } from "@/types-enums-interfaces/PistonKitProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useHover, GetUserColumnConfig, pistonKitTable } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { PistonKit as PistonKitSVG } from "@/Components";
import {
  MeasurementDistributionTips,
  ReutilisableTip,
} from "@/Components/CommonSearchTips";
import { filterData } from "@/utils/filteredData";

const PistonKitSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { pistonKit } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnPistonKit = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: pistonKit,
    part: possibleParts.PistonKit,
    arrayPartData: pistonKitTable,
  });

  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/PistonKit.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  useEffect(() => {
    if (data && data?.length === 0) return;
    setFilteredData(filterData(data, pistonKit as any));
  }, [data, pistonKit]);

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
        <div className="bg-gray-80 mb-20 h-[400px]">
          <DataGrid
            rows={filteredData}
            columns={columnPistonKit}
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
        <MeasurementDistributionTips />
        <ReutilisableTip text="If you are searching for a piston kit with a flat top, you can enter the same measurement for both A and C." />
      </div>
    </div>
  );
};

export default PistonKitSearcher;
