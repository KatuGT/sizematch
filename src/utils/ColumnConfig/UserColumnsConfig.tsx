import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import InputForChart from "@/Components/InputForChart";
import {
  INITIAL_STATE_BRAKEDISC,
  INITIAL_STATE_CONNECTINGROD,
  INITIAL_STATE_FSLARGESPLINE,
  INITIAL_STATE_FSNARROWSPLINE,
  INITIAL_STATE_PISTONKIT,
  INITIAL_STATE_REARSPROCKET,
  INITIAL_STATE_VALVE,
} from "@/Context/SharedValuesContext/InitialStates";
import LaunchIcon from "@mui/icons-material/Launch";

type arrayPartDataProps = {
  field: string;
  headerName: string;
  darkColor: string;
  ligthColor: string;
  mainClass: string;
  placeholder: string;
};

type contextDataType =
  | typeof INITIAL_STATE_FSNARROWSPLINE
  | typeof INITIAL_STATE_FSLARGESPLINE
  | typeof INITIAL_STATE_REARSPROCKET
  | typeof INITIAL_STATE_BRAKEDISC
  | typeof INITIAL_STATE_CONNECTINGROD
  | typeof INITIAL_STATE_PISTONKIT
  | typeof INITIAL_STATE_VALVE;

interface ColumnProps extends SVGProps {
  contextData: contextDataType;
  part: possibleParts;
  arrayPartData: arrayPartDataProps[];
}

export const GetUserColumnConfig = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
  contextData,
  part,
  arrayPartData,
}: ColumnProps) => {
  const { dispatch } = useContext(SharedValuesContext);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "").substring(0, 6);

    dispatch({
      type: name,
      payload: name === "d_type" ? value : newValue,
      group: part,
    });
  };

  const column: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    {
      field: "code",
      headerName: "Code",
      width: 130,
      sortComparator: (v1, v2) => {
        const num1 = parseInt(v1.slice(3));
        const num2 = parseInt(v2.slice(3));
        return num1 - num2;
      },
    },
    ...(arrayPartData.map((data) => {
      if (!data.field.includes("chain")) {
        return {
          field: data.field,
          headerName: data.headerName,
          width: 90,
          filterable: false,
          disableColumnMenu: true,
          headerAlign: "center",          
          renderHeader: () => (
            <InputForChart
              darkColor={data.darkColor}
              ligthColor={data.ligthColor}
              mainClass={data.mainClass}
              onChange={handleValueChange}
              value={contextData[data.field as keyof contextDataType] || ""}
              label={data.headerName}
              placeholder={data.placeholder}
              name={data.field}
              hoveredClass={hoveredClass}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ),
          sortable: false,
        };
      } else {
        return {
          field: data.field,
          headerName: data.headerName,
          sortable: false,
          width: 90,
          disableColumnMenu: true,
          headerAlign: "center",
          renderHeader: () => (
            <label
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`${data.mainClass} ${
                hoveredClass === data.mainClass
                  ? data.ligthColor
                  : data.darkColor
              } custom-input-wrapper `}
            >
              <span className="custom-input-span">{data.headerName}</span>
              <input
                placeholder="520"
                type="text"
                className="custom-input bg-slate-950 focus:border-slate-600 focus:shadow-md focus:outline-slate-700 focus-visible:outline-slate-700"
                name={data.field}
                value={contextData[data.field as keyof contextDataType] || ""}
                onChange={handleValueChange}
                list="chain"
              />
              <datalist id="chain">
                <option value="532" />
                <option value="530" />
                <option value="525" />
                <option value="520" />
                <option value="428" />
                <option value="420" />
              </datalist>
            </label>
          ),
        };
      }
    }) as GridColDef[]),
    {
      field: "link",
      headerName: "Link",
      width: 110,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <a target="_blank" href={params.row.link}>
          <LaunchIcon />
          <span> See more</span>
        </a>
      ),
    },
  ];
  return column;
};
