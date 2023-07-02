"use client";
import React, { useCallback, useContext, useEffect } from "react";
import Table from "@/Components/Table/Table";
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
  FSsizeProps,
  SearchResult,
} from "@/types-enums-interfaces/FSnarrowSplineProps";

const FrontSprocket = () => {
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  const { dispatch, state } = useContext(SharedValuesContext);
  const { fsNarroSpline } = state;

  const transformToParams = useCallback(() => {
    let count = 0;
    let params = "";

    for (const key in fsNarroSpline) {
      if (
        fsNarroSpline.hasOwnProperty(key) &&
        fsNarroSpline[key as keyof FSsizeProps] !== ""
      ) {
        count++;
        if (count > 1) {
          params += "&";
        }
        params += `${key}=${encodeURIComponent(
          fsNarroSpline[key as keyof FSsizeProps]
        )}`;
      }
    }
    if (count < 2) {
      params = "";
    }
    return params;
  }, [fsNarroSpline]);

  useEffect(() => {
    transformToParams();
  }, [fsNarroSpline, transformToParams]);

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

  const { data, error, isLoading } = useSWR<SearchResult[]>(
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

  return (
    <div className="flex flex-col items-center justify-center">
      <FSNarrowSpline
        control={control}
        errors={errors}
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
      <Table
        handleFSChange={handleFSChange}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        hoverClass={hoverClass}
        sizes={FSNarrowSplineTableData}
        searchResults={searchResults}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default FrontSprocket;
