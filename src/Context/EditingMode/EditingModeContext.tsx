"use client";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  editingMode: false,
  id: "",
  part: "",
};

type StateType = {
  editingMode: boolean;
  id: string;
  part: string;
};

type ActionType = {
  type: "EDIT_MODE";
  payload: boolean;
  id?: string;
  part?: string;
};

export const EditingModeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "EDIT_MODE":
      return {
        ...state,
        editingMode: action.payload,
        id: action.id || state.id,
        part: action.part || state.part,
      };
    default:
      return state;
  }
};

export const EditingModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <EditingModeContext.Provider value={{ state, dispatch }}>
      {children}
    </EditingModeContext.Provider>
  );
};
