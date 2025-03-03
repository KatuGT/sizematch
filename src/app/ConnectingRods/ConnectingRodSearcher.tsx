"use client";
import { ConnectingRod, TableRecomendations } from "@/Components";
import { MeasurementDistributionTips } from "@/Components/CommonSearchTips";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { SearchResultConnectingRod } from "@/types-enums-interfaces/ConnectingRodProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { GetUserColumnConfig, connectingRodTable, useHover } from "@/utils";
import CreateParams from "@/utils/createParams";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import F3 from "../../../public/F3.webp";
import Adsterra from "@/Components/Adsterra";
import { filterData } from "@/utils/filteredData";

const ConnectingRodSearcher = () => {
  const { state } = useContext(SharedValuesContext);
  const { connectingRod } = state;
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const columnRearSprocket = GetUserColumnConfig({
    hoveredClass: hoverClass,
    onMouseEnter: handleHover,
    onMouseLeave: handleMouseLeave,
    contextData: connectingRod,
    part: possibleParts.ConnectingRods,
    arrayPartData: connectingRodTable,
  });

  const [data, setData] = useState<any[]>([]); 
   const [filteredData, setFilteredData] = useState<any[]>([]); 
 
    
   useEffect(() => {
     fetch("/data/ConnectingRods.json")
       .then((res) => res.json())
       .then((json) => setData(json))
       .catch((err) => console.error("Error cargando JSON:", err));
   }, []);
 
   useEffect(() => {
     if (data && data?.length === 0) return;
     setFilteredData(filterData(data, connectingRod as any));
   }, [data, connectingRod]);
 

  const {
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center p-4 laptop:w-full laptop:max-w-[min-content]">
      <ConnectingRod
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <div className="my-20  w-full text-white">
        <TableRecomendations />
        <div className="bg-gray-80 mb-20 h-[400px]">
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
        <MeasurementDistributionTips />
        <div className="mt-5 rounded-lg border border-gray-700 p-4  text-white">
          <p className="flex items-center">
            💡 To find your code on the Prox Racing Part website, press
            {F3 ? (
              <Image
                alt="Button f3"
                src={F3}
                height={40}
                width={40}
                className="mx-1"
              />
            ) : (
              "&rdquo;F3&rdquo;"
            )}
            to open the search function, and then enter your code in the search
            bar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectingRodSearcher;
