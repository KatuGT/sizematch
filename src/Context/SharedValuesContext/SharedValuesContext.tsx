"use client";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE_FSNARROWSPLINE = {
  a_innerMinimumDiameter: "",
  b_innerTeethNumber: "",
  c_innerMaximumDiameter: "",
  d_width: "",
  e_chain: "",
};

const INITIAL_STATE_FSLARGESPLINE = {
  a_holeTohole: "",
  b_center: "",
  c_chain: "",
};

type StateType = {
  fsNarroSpline: typeof INITIAL_STATE_FSNARROWSPLINE;
  fsLargeSpline: typeof INITIAL_STATE_FSLARGESPLINE;
};

type ActionType = {
  type: string;
  payload: string;
  group: "FSNarrowSpline" | "FSLageSpline";
};

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const SharedValuesContext = createContext<ContextType>({
  state: {
    fsNarroSpline: INITIAL_STATE_FSNARROWSPLINE,
    fsLargeSpline: INITIAL_STATE_FSLARGESPLINE,
  },
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  const { group, type, payload } = action;

  switch (group) {
    case "FSNarrowSpline":
      return {
        ...state,
        fsNarroSpline: {
          ...state.fsNarroSpline,
          [type]: payload,
        },
      };
    case "FSLageSpline":
      return {
        ...state,
        fsLargeSpline: {
          ...state.fsLargeSpline,
          [type]: payload,
        },
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
    fsNarroSpline: INITIAL_STATE_FSNARROWSPLINE,
    fsLargeSpline: INITIAL_STATE_FSLARGESPLINE,
  });

  return (
    <SharedValuesContext.Provider value={{ state, dispatch }}>
      {children}
    </SharedValuesContext.Provider>
  );
};
