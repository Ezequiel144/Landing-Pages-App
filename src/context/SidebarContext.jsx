import { createContext } from "react";
import { useState } from "react";

export const providerSidebar = createContext();

// eslint-disable-next-line react/prop-types
export default function SidebarContext({children}){
    
    const [actionSidebar,setActionSidebar] = useState(false);
    
    console.log(actionSidebar)

    return(
        <providerSidebar.Provider value={{actionSidebar,setActionSidebar}}>
            {children}
        </providerSidebar.Provider>
    )
}