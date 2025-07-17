import React, { useContext, useState } from "react";
import UseFetch from "./UseFetch";


let AppContext = React.createContext()
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=c0953a27`

let AppProvider = ({children})=>{
    let [query,setquery] = useState("batman")
    let { isLoading, error, data} = UseFetch(`&s=${query}`)
    return(
        <AppContext.Provider 
        value={{query,setquery, isLoading, error, data}}>
            {children}
        </AppContext.Provider>
    )
}
export let UseGlobelContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}