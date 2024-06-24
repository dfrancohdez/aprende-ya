import { createContext, useState } from "react";

export const AuthContext =createContext()
export const AuthContextProvider =({children})=>{
    const [currentUser,setCurrentUser]=useState({})
}