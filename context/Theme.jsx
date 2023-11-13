import { createContext, useState } from "react";

export const ThemeContextNovo = createContext(null)

export const ThemeContextNovoProvider = ({ children}) => {

    const [theme , setTheme] = useState (theme);


    return (

        <ThemeContextNovo.Provider value={{theme , setTheme}}>

        {children}

        </ThemeContextNovo.Provider>

    )

}