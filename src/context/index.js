import React, { useReducer, createContext } from "react";
// @import actions
import { SET_TOTAL_SCORE } from "./actions";

export const AppContext = createContext();

const initialState = {
  totalScore: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [appState, appDispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
