"use client";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import {
  FSsizeProps,
  SearchResult,
} from "@/types-enums-interfaces/FSnarrowSplineProps";
import React, { useContext } from "react";

interface TableProps {
  onMouseEnter?: React.MouseEventHandler<HTMLTableCellElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLTableCellElement>;
  handleFSChange: React.ChangeEventHandler<HTMLInputElement>;
  hoverClass?: string;
  searchResults: SearchResult[] | undefined;
  isLoading: boolean;
  error: string;
  sizes: {
    displayName: string;
    inputName: string;
    value?: string;
    placeholder: string;
    generalSize: string;
    baseColor: string;
    hoverColor: string;
  }[];
}

const Table: React.FC<TableProps> = ({
  onMouseEnter,
  onMouseLeave,
  handleFSChange,
  hoverClass,
  sizes,
  searchResults,
  isLoading,
  error,
}) => {
  const { state } = useContext(SharedValuesContext);
  const { fsNarrowSpline } = state;

  return (
    <div className="table-container mb-5 max-w-full overflow-x-auto px-4 ">
      <div>
        <p className="text-white">*Please write the size in millimeters</p>
        <p className=" text-white">*At least two values are required</p>
      </div>
      <div className="w-[max-content] border border-solid border-gray-100">
        <table className="w-[max-content] table-fixed border-spacing-0 text-center text-white">
          <thead>
            <tr>
              <th className="sticky left-0 w-[128px] rounded-s-3xl  bg-gray-900">
                Make
              </th>
              <th className="sticky left-[128px] w-[128px]  bg-gray-900">
                Code
              </th>
              {sizes?.map((size) => {
                const needDataList = size?.inputName?.includes("chain");

                return (
                  <th
                    key={size?.inputName}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={`${size?.generalSize} ${
                      hoverClass === size?.generalSize
                        ? size?.hoverColor
                        : size?.baseColor
                    } py-2 `}
                  >
                    {!needDataList ? (
                      <label className="flex flex-col">
                        <span>{size?.displayName}</span>
                        <input
                          pattern="^\d+(\.\d+)?$"
                          type="text"
                          name={size?.inputName}
                          placeholder={size?.placeholder}
                          className={`${size?.generalSize} w-[100px] bg-transparent text-center text-white`}
                          onChange={handleFSChange}
                          value={
                            fsNarrowSpline[
                              size?.inputName as keyof FSsizeProps
                            ] || ""
                          }
                        />
                      </label>
                    ) : (
                      <label className="flex flex-col">
                        <span>E</span>
                        <input
                          name={size?.inputName}
                          placeholder={size?.placeholder}
                          className="w-[100px] bg-transparent text-center text-white"
                          onChange={handleFSChange}
                          value={
                            fsNarrowSpline[
                              size?.inputName as keyof FSsizeProps
                            ] || ""
                          }
                          list="chain"
                        />
                        <datalist id="chain">
                          <option value="532" />
                          <option value="530" />
                          <option value="525" />
                          <option value="520" />
                          <option value="428" />
                        </datalist>
                      </label>
                    )}
                  </th>
                );
              })}
              <th className="w-[100px] ">Link</th>
            </tr>
          </thead>
          <tbody className="border-t border-solid border-gray-200 last:rounded-b-3xl">
            {searchResults &&
              searchResults?.map((result: any) => {
                return (
                  <tr
                    key={result._id}
                    className="overflow-hidden bg-gray-800 text-white  even:bg-gray-700"
                  >
                    <td className="sticky left-0 w-[100px] bg-inherit p-3 last:rounded-3xl">
                      {result.make}
                    </td>
                    <td className="sticky left-[124px] w-[100px] bg-inherit  p-3">
                      {result.code}
                    </td>
                    <td className="p-3">{result.a_innerMinimumDiameter}</td>
                    <td className="p-3">{result.b_innerTeethNumber}</td>
                    <td className="p-3">{result.c_innerMaximumDiameter}</td>
                    <td className="p-3">{result.d_width}</td>
                    <td className="p-3">{result.e_chain}</td>
                    <td className="p-3">
                      <a
                        href={result.link}
                        className="rounded text-center outline outline-1 outline-slate-300"
                      >
                        See more
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {isLoading && (
            <tfoot className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
              <tr>
                <td colSpan={8} className="py-3">
                  Wait...
                </td>
              </tr>
            </tfoot>
          )}
          {error && (
            <tfoot className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
              <tr>
                <td colSpan={8} className="py-3">
                  Input a valid size
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
