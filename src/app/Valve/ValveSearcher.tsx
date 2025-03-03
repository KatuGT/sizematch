"use client";
import { TableRecomendations } from "@/Components";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useHover, GetUserColumnConfig, valveTable } from "@/utils";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Valve as ValveSVG } from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import { filterData } from "@/utils/filteredData";

const ValveSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { valve } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnValve = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: valve,
    part: possibleParts.Valve,
    arrayPartData: valveTable,
  });

  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/Valve.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  useEffect(() => {
    if (data && data?.length === 0) return;
    setFilteredData(filterData(data, valve as any));
  }, [data, valve]);

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:max-w-[min-content]">

      <ValveSVG
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <div className="my-20  mb-20 w-full text-white">
        <TableRecomendations />

        <div className="bg-gray-80 mb-20 mt-5 h-[400px]">
          <DataGrid
            rows={filteredData}
            columns={columnValve}
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
      </div>
    </div>
  );
};

export default ValveSearcher;
