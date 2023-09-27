'use client';
import React, { createContext } from 'react';
export const MyContext = createContext();

const Context = ({ children }) => {
  const firstName = 'Aayush';
  const lastName = 'Jain';
  const companyName = 'Test Company';
  return (
    <div>
      <MyContext.Provider value={{ firstName, lastName, companyName }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default Context;
