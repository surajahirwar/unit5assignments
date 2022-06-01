import {createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data,setData]=useState({})
  const handelsetdata=(newdata)=>{
     setData(newdata)
  }

  console.log(data)
  return (
    <DataContext.Provider value={{data,handelsetdata}}>
      {children}
    </DataContext.Provider>
  );
};