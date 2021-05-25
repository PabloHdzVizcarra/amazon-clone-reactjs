import React from "react";
import { reducer } from "./reducer";

export const AppStateContext = React.createContext();
export const AppDispatchContext = React.createContext();

// eslint-disable-next-line react/prop-types
function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    reducer,
    {
      user: null,
      basket: [],
    },
    undefined
  );

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within StateProvider");
  }

  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within StateProvider");
  }

  return context;
}

function useApp() {
  return [useAppState(), useAppDispatch()];
}

export { StateProvider, useAppState, useAppDispatch, useApp };
