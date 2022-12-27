import { useEffect, useState } from "react";
import { MiContext } from "./miContext";




export const MiProvider = ({ children }) => {

     
     
    
   

  return <MiContext.Provider value={{
    


  }}>{children}
        </MiContext.Provider>;
};
