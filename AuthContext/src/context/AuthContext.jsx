import { createContext, useState } from "react";


export const AuthCreate=createContext();

export const AuthProvider=({children})=>{
  
  const [isAuth,setAuth]=useState(false)

  const authtoggle=(details)=>{
    if(isAuth){
        setAuth(false)
    }

    else{
        setAuth(true)
    }
  }
  
    return (
        <AuthCreate.Provider value={{isAuth,authtoggle}} >{children}</AuthCreate.Provider>
    )
}