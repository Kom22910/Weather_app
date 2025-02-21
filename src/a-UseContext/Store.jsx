
import { createContext , useContext } from "react";


const APPContext = createContext();

const APPProvider = ({children}) =>{
    
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;

    return(
        <APPContext.Provider value={{ url , apiKey }}>
            {children}
        </APPContext.Provider>
    );
};


const useStore = ()=>{
    const a = useContext(APPContext);
    return a;
}


export {APPProvider , useStore};