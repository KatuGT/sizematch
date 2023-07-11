"use client";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  selectedPart: possibleParts.FSNarrowSpline,
};

type StateType = {
  selectedPart: possibleParts;
};

type ActionType = {
  type: "CHANGE_SELECTED_PART";
  payload: possibleParts;
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
    case "CHANGE_SELECTED_PART":
      return {
        ...state,
        selectedPart: action.payload,
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
