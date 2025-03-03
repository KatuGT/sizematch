"use client";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultBrakeDisc } from "@/types-enums-interfaces/BrakeDiscProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { GetUserColumnConfig, brakeDiscTable, useHover } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { BrakeDisc as BrakeDiscSVG, TableRecomendations } from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import Adsterra from "@/Components/Adsterra";
import { filterData } from "@/utils/filteredData";

const BrakeDiscSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { brakeDisc } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });

  const columnBrakeDisc = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: brakeDisc,
    part: possibleParts.BrakeDisc,
    arrayPartData: brakeDiscTable,
  });

  const [data, setData] = useState<any[]>([]); 
  const [filteredData, setFilteredData] = useState<any[]>([]); 
   
  useEffect(() => {
    fetch("/data/BrakeDisc.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  useEffect(() => {
    if (data && data?.length === 0) return;
    setFilteredData(filterData(data, brakeDisc as any));
  }, [data, brakeDisc]);

  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-full laptop:max-w-[min-content]">
      <BrakeDiscSVG
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
      <div className="my-20  w-full text-white">
        <TableRecomendations />
        <div className="bg-gray-80 mb-20  h-[400px]">
          <DataGrid
            rows={filteredData}
            columns={columnBrakeDisc}
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

export default BrakeDiscSearcher;
