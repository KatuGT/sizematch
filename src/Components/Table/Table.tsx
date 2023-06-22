"use client";
import React from "react";

interface TablePros {
  handleHover: React.MouseEventHandler<HTMLTableCellElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLTableCellElement>;
  handleFSChange: React.ChangeEventHandler<HTMLInputElement>;
  hoverClass: string;
  sizes: {
    displayName: string;
    inputName: string;
    value?: number;
    placeholder: string;
    generalSize: string;
    baseColor: string;
    hoverColor: string;
  }[];
}

const Table = ({
  handleHover,
  handleMouseLeave,
  handleFSChange,
  hoverClass,
  sizes,
}: TablePros) => {
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
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    className={`${size?.generalSize} w-28 ${
                      hoverClass === size?.generalSize
                        ? size?.baseColor
                        : size?.hoverColor
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
                          className="w-full bg-transparent text-center text-white"
                          onChange={handleFSChange}
                          value={size?.value || ""}
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
          {/* <tbody>
          <tr className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
            <td className="p-4">Prox</td>
            <td className="p-4">03-54535</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">www-com</td>
          </tr>

          <tr className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
            <td className="p-4">Prox</td>
            <td className="p-4">03-54535</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">100</td>
            <td className="p-4">www-com</td>
          </tr>
        </tbody> */}
        </table>
      </div>
    </section>
  );
};

export default Table;
