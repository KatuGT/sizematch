import { GridColDef } from "@mui/x-data-grid";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { FSNarrowSplinesizeProps } from "@/types-enums-interfaces/FSnarrowSplineProps";
import { useContext } from "react";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { RearSprocketsizeProps } from "@/types-enums-interfaces/RearSprocketProps";
import { ConnectingRodSizeProps } from "@/types-enums-interfaces/ConnectingRodProps";

export const GetConnectingRodConfigColumnUser = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  const { dispatch, state } = useContext(SharedValuesContext);
  const { connectingRod } = state;

  const handleRearSprocketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: possibleParts.ConnectingRods,
    });
  };

  const ConnectingRodColumn: GridColDef[] = [
    { field: "make", headerName: "Make", width: 130, sortable: false },
    { field: "code", headerName: "Code", width: 130 },
    {
      field: "a_bigEnd",
      headerName: "A",
      width: 90,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",

      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeA ${
            hoveredClass === "sizeA"
              ? "text-sizeAcolorLight"
              : "text-sizeAcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">A</span>
          <input
            placeholder="22"
            type="text"
            className="custom-input"
            name="a_bigEnd"
            value={connectingRod.a_bigEnd || ""}
            onChange={handleRearSprocketChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "b_smallEnd",
      headerName: "B",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeB ${
            hoveredClass === "sizeB"
              ? "text-sizeBcolorLight"
              : "text-sizeBcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">B</span>
          <input
            placeholder="14"
            type="text"
            className="custom-input"
            name="b_smallEnd"
            value={
              connectingRod["b_smallEnd" as keyof ConnectingRodSizeProps] || ""
            }
            onChange={handleRearSprocketChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "c_centerToCenter",
      headerName: "C",
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeC ${
            hoveredClass === "sizeC"
              ? "text-sizeCcolorLight"
              : "text-sizeCcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">C</span>
          <input
            placeholder="80"
            type="text"
            className="custom-input"
            name="c_centerToCenter"
            value={
              connectingRod[
                "c_centerToCenter" as keyof ConnectingRodSizeProps
              ] || ""
            }
            onChange={handleRearSprocketChange}
          />
        </label>
      ),
      sortable: false,
    },
    {
      field: "d_totalLength",
      headerName: "D",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <label
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeD ${
            hoveredClass === "sizeD"
              ? "text-sizeDcolorLight"
              : "text-sizeDcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">D</span>
          <input
            placeholder="105.25"
            type="text"
            className="custom-input"
            name="d_totalLength"
            value={
              connectingRod["d_totalLength" as keyof ConnectingRodSizeProps] ||
              ""
            }
            onChange={handleRearSprocketChange}
          />
        </label>
      ),
    },
    {
      field: "e_widthBigEnd",
      headerName: "E",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeE ${
            hoveredClass === "sizeE"
              ? "text-sizeEcolorLight"
              : "text-sizeEcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">E</span>
          <input
            placeholder="13.5"
            type="text"
            className="custom-input"
            name="e_widthBigEnd"
            value={
              connectingRod["e_widthBigEnd" as keyof ConnectingRodSizeProps] ||
              ""
            }
            onChange={handleRearSprocketChange}
          />
        </div>
      ),
    },
    {
      field: "f_widthSmallEnd",
      headerName: "F",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeF ${
            hoveredClass === "sizeF"
              ? "text-sizeFcolorLight"
              : "text-sizeFcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">F</span>
          <input
            placeholder="10.5"
            type="text"
            className="custom-input"
            name="f_widthSmallEnd"
            value={
              connectingRod[
                "f_widthSmallEnd" as keyof ConnectingRodSizeProps
              ] || ""
            }
            onChange={handleRearSprocketChange}
          />
        </div>
      ),
    },
    {
      field: "g_eyeToEyeCenter",
      headerName: "G",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeG ${
            hoveredClass === "sizeG"
              ? "text-sizeGcolorLight"
              : "text-sizeGcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">G</span>
          <input
            placeholder="60.5"
            type="text"
            className="custom-input"
            name="g_eyeToEyeCenter"
            value={
              connectingRod[
                "g_eyeToEyeCenter" as keyof ConnectingRodSizeProps
              ] || ""
            }
            onChange={handleRearSprocketChange}
          />
        </div>
      ),
    },
    {
      field: "h_bigEndPinDiameter",
      headerName: "H",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeH ${
            hoveredClass === "sizeH"
              ? "text-sizeHcolorLight"
              : "text-sizeHcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">H</span>
          <input
            placeholder="520"
            type="text"
            className="custom-input"
            name="h_bigEndPinDiameter"
            value={
              connectingRod[
                "h_bigEndPinDiameter" as keyof ConnectingRodSizeProps
              ] || ""
            }
            onChange={handleRearSprocketChange}
          />
        </div>
      ),
    },
    {
      field: "i_bigEndPinLength",
      headerName: "I",
      sortable: false,
      width: 90,
      disableColumnMenu: true,
      renderHeader: () => (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`sizeI ${
            hoveredClass === "sizeI"
              ? "text-sizeIcolorLight"
              : "text-sizeIcolor"
          } custom-input-wrapper`}
        >
          <span className="custom-input-span">I</span>
          <input
            placeholder="520"
            type="text"
            className="custom-input"
            name="i_bigEndPinLength"
            value={
              connectingRod[
                "i_bigEndPinLength" as keyof ConnectingRodSizeProps
              ] || ""
            }
            onChange={handleRearSprocketChange}
          />
        </div>
      ),
    },
    {
      field: "link",
      headerName: "Link",
      width: 90,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => <a href={params.row.link}>See more</a>,
    },
  ];
  return ConnectingRodColumn;
};
