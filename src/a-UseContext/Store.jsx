
import { createContext , useContext } from "react";


const APPContext = createContext();

const APPProvider = ({children}) =>{
    const url = import.meta.env.VITE_API_URL;

    return(
        <APPContext.Provider value={{ url }}>
            {children}
        </APPContext.Provider>
    );
};


const useStore = ()=>{
    const a = useContext(APPContext);
    return a;
}


export {APPProvider , useStore};