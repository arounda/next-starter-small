'use client';

import { createContext, useState } from 'react';

const defaultStoreValue = {
  counter: 0,
  setCounter: () => {
    //
  },
};

export const StoreContext = createContext(defaultStoreValue);

export const StoreContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <StoreContext.Provider value={{ counter, setCounter }}>
      {children}
    </StoreContext.Provider>
  );
};
