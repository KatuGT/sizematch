import { EditingModeContext } from "@/Context/EditingMode/EditingModeContext";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import { useContext, useEffect } from "react";

interface usePart {
    part: string,
    setValue: any
}

export const usePart = ({part, setValue}: usePart) => {
  const { state: sharedValueState } = useContext(SharedValuesContext);
  const {
    fsNarrowSpline,
    fsLargeSpline,
    rearSprocket,
    brakeDisc,
    connectingRod,
    pistonKit,
    valve,
  } = sharedValueState;

  const { state: editingModeState } = useContext(EditingModeContext);
  const { editingMode } = editingModeState;

  useEffect(() => {
    if (editingMode) {
      if (part === possibleParts.FSNarrowSpline) {
        Object.keys(fsNarrowSpline).forEach((key) => {
          setValue(key, fsNarrowSpline[key as keyof typeof fsNarrowSpline]);
        });
      } else if (part === possibleParts.FSLargeSpline) {
        Object.keys(fsLargeSpline).forEach((key) => {
          setValue(key, fsLargeSpline[key as keyof typeof fsLargeSpline]);
        });
      } else if (part === possibleParts.RearSprocket) {
        Object.keys(rearSprocket).forEach((key) => {
          setValue(key, rearSprocket[key as keyof typeof rearSprocket]);
        });
      } else if (part === possibleParts.BrakeDisc) {
        Object.keys(brakeDisc).forEach((key) => {
          setValue(key, brakeDisc[key as keyof typeof brakeDisc]);
        });
      } else if (part === possibleParts.ConnectingRods) {
        Object.keys(connectingRod).forEach((key) => {
          setValue(key, connectingRod[key as keyof typeof connectingRod]);
        });
      } else if (part === possibleParts.PistonKit) {
        Object.keys(pistonKit).forEach((key) => {
          setValue(key, pistonKit[key as keyof typeof pistonKit]);
        });
      } else if (part === possibleParts.Valve) {
        Object.keys(valve).forEach((key) => {
          setValue(key, valve[key as keyof typeof valve]);
        });
      }
    }
  }, [
    editingMode,
    fsLargeSpline,
    fsNarrowSpline,
    part,
    rearSprocket,
    brakeDisc,
    connectingRod,
    pistonKit,
    valve,
    setValue,
  ]);
};
