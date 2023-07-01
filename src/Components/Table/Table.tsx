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
  const { fsNarroSpline } = state;

  return (
    <section className="px-5">
      <div>
        <p className="text-white">*Please write the size in millimeters</p>
        <p className=" text-white">*At least two values are required</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-solid border-gray-100 ">
        <table className="my-2 border-spacing-0 overflow-hidden text-center text-white">
          <thead>
            <tr className="border-b border-solid border-gray-200">
              <th className="w-32 p-2">Make</th>
              <th className="w-32 p-2">Code</th>
              {sizes?.map((size) => {
                const needDataList = size?.inputName?.includes("chain");

                return (
                  <th
                    key={size?.inputName}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={`${size?.generalSize} w-28 ${
                      hoverClass === size?.generalSize
                        ? size?.hoverColor
                        : size?.baseColor
                    }`}
                  >
                    {!needDataList ? (
                      <label>
                        <span>{size?.displayName}</span>
                        <input
                          pattern="^\d+(\.\d+)?$"
                          type="text"
                          name={size?.inputName}
                          placeholder={size?.placeholder}
                          className={`${size?.generalSize} w-full bg-transparent text-center text-white`}
                          onChange={handleFSChange}
                          value={
                            fsNarroSpline[size?.inputName as keyof FSsizeProps]
                          }
                        />
                      </label>
                    ) : (
                      <label>
                        <span>E</span>
                        <input
                          name={size?.inputName}
                          placeholder={size?.placeholder}
                          className="w-full bg-transparent text-center text-white"
                          onChange={handleFSChange}
                          value={size?.value || ""}
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

              <th className="w-32 p-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {searchResults &&
              searchResults?.map((result: any) => {
                return (
                  <tr
                    key={result._id}
                    className="overflow-hidden bg-gray-800 text-white even:bg-gray-700"
                  >
                    <td className="p-4">{result.make}</td>
                    <td className="p-4">{result.code}</td>
                    <td className="p-4">{result.a_innerMinimumDiameter}</td>
                    <td className="p-4">{result.b_innerTeethNumber}</td>
                    <td className="p-4">{result.c_innerMaximumDiameter}</td>
                    <td className="p-4">{result.d_width}</td>
                    <td className="p-4">{result.e_chain}</td>
                    <td className="max-w-[50px] p-4">
                      <a
                        href={result.link}
                        className="rounded p-2 outline outline-1 outline-slate-300"
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
                  Error
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </section>
  );
};

export default Table;
