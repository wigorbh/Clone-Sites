import React, { createContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => {

  const context = { a: 'a'}

  return (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  ); 
}

