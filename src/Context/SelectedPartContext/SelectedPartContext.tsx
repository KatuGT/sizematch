'use client'
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  frontSprocket: possibleParts.FSNarrowSpline,
  pistonKit: "2T",
};

type StateType = {
  frontSprocket: string;
  pistonKit: string;
};

type ActionType = {
  type: "CHANGE_FRONTSPROCKET" | "CHANGE_PISTONKIT";
  payload: string;
};

export const SelectedPartContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_FRONTSPROCKET":
      return {
        ...state,
        frontSprocket: action.payload,
      };
    case "CHANGE_PISTONKIT":
      return {
        ...state,
        pistonKit: action.payload,
      };
    default:
      return state;
  }
};

export const SelectedPartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <SelectedPartContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectedPartContext.Provider>
  );
};
