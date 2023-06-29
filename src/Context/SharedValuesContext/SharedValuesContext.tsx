'use client'
import React, { createContext, useReducer } from "react";

const INITIAL_STATE_FRONTSPROCKET = {
  a_innerMinimumDiameter: "",
  b_innerTeethNumber: "",
  c_innerMaximumDiameter: "",
  d_width: "",
  e_chain: "",
};

const INITIAL_STATE_REARSPROCKET = {
  a_holeTohole: "",
  b_center: "",
  c_chain: "",
};

type StateType = {
  frontSprocket: typeof INITIAL_STATE_FRONTSPROCKET;
  rearSprocket: typeof INITIAL_STATE_REARSPROCKET;
};

type ActionType = {
  type: string;
  payload: string;
  group: "frontSprocket" | "rearSprocket";
};

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const SharedValuesContext = createContext<ContextType>({
  state: {
    frontSprocket: INITIAL_STATE_FRONTSPROCKET,
    rearSprocket: INITIAL_STATE_REARSPROCKET,
  },
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  const { group, type, payload } = action;

  switch (group) {
    case "frontSprocket":
      return {
        ...state,
        frontSprocket: {
          ...state.frontSprocket,
          [type]: payload,
        },
      };
    case "rearSprocket":
      return {
        ...state,
        rearSP: {
          ...state.rearSprocket,
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
    frontSprocket: INITIAL_STATE_FRONTSPROCKET,
    rearSprocket: INITIAL_STATE_REARSPROCKET,
  });

  return (
    <SharedValuesContext.Provider value={{ state, dispatch }}>
      {children}
    </SharedValuesContext.Provider>
  );
};
