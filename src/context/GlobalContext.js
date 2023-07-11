import React,{createContext} from "react";

export const GlobalContext=createContext()

const GlobalContextProvider=(props)=>{
    const student={
        name: 'Ram',
        age: 25,
        address: 'Kathmandu'
    }
    return(
        <GlobalContext.Provider value={student}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider