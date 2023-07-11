"use client";
import React, { createContext, useReducer } from "react";
import {
  INITIAL_STATE_FSLARGESPLINE,
  INITIAL_STATE_FSNARROWSPLINE,
  INITIAL_STATE_REARSPROCKET,
} from "./InitialStates";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

type StateType = {
  fsNarrowSpline: typeof INITIAL_STATE_FSNARROWSPLINE;
  fsLargeSpline: typeof INITIAL_STATE_FSLARGESPLINE;
  rearSprocket: typeof INITIAL_STATE_REARSPROCKET;
};

type SetDataAction = {
  type: "SET_DATA";
  payload: Partial<
    | typeof INITIAL_STATE_FSNARROWSPLINE
    | typeof INITIAL_STATE_FSLARGESPLINE
    | typeof INITIAL_STATE_REARSPROCKET
  >;
  group:
    | possibleParts.FSNarrowSpline
    | possibleParts.FSLargeSpline
    | possibleParts.RearSprocket;
};

export type ActionType =
  | SetDataAction
  | {
      type: "SET_DATA";
      payload: Partial<
        | typeof INITIAL_STATE_FSNARROWSPLINE
        | typeof INITIAL_STATE_FSLARGESPLINE
        | typeof INITIAL_STATE_REARSPROCKET
      >;
      group:
        | possibleParts.FSNarrowSpline
        | possibleParts.FSLargeSpline
        | possibleParts.RearSprocket;
    }
  | {
      type: string;
      payload: string;
      group:
        | possibleParts.FSNarrowSpline
        | possibleParts.FSLargeSpline
        | possibleParts.RearSprocket
        | "RESET_VALUES";
    };

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const SharedValuesContext = createContext<ContextType>({
  state: {
    fsNarrowSpline: INITIAL_STATE_FSNARROWSPLINE,
    fsLargeSpline: INITIAL_STATE_FSLARGESPLINE,
    rearSprocket: INITIAL_STATE_REARSPROCKET,
  },
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  const { group, type, payload } = action;

  switch (group) {
    case possibleParts.FSNarrowSpline:
      return {
        ...state,
        fsNarrowSpline: {
          ...state.fsNarrowSpline,
          ...(type === "SET_DATA" &&
            (payload as Partial<typeof INITIAL_STATE_FSNARROWSPLINE>)),
          ...(type !== "SET_DATA" && { [type]: payload }),
        },
      };
    case possibleParts.FSLargeSpline:
      return {
        ...state,
        fsLargeSpline: {
          ...state.fsLargeSpline,
          ...(type === "SET_DATA" &&
            (payload as Partial<typeof INITIAL_STATE_FSLARGESPLINE>)),
          ...(type !== "SET_DATA" && { [type]: payload }),
        },
      };
    case possibleParts.RearSprocket:
      return {
        ...state,
        rearSprocket: {
          ...state.rearSprocket,
          ...(type === "SET_DATA" &&
            (payload as Partial<typeof INITIAL_STATE_REARSPROCKET>)),
          ...(type !== "SET_DATA" && { [type]: payload }),
        },
      };
    case "RESET_VALUES":
      return {
        ...state,
        fsNarrowSpline: INITIAL_STATE_FSNARROWSPLINE,
        fsLargeSpline: INITIAL_STATE_FSLARGESPLINE,
        rearSprocket: INITIAL_STATE_REARSPROCKET,
      };
    default:
      return state;
  }
};

export const SharedValuesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    fsNarrowSpline: INITIAL_STATE_FSNARROWSPLINE,
    fsLargeSpline: INITIAL_STATE_FSLARGESPLINE,
    rearSprocket: INITIAL_STATE_REARSPROCKET,
  });

  return (
    <SharedValuesContext.Provider value={{ state, dispatch }}>
      {children}
    </SharedValuesContext.Provider>
  );
};
