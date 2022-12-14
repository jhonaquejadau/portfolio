import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true)
    
    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeProvider, DarkModeContext as DarkModeConsumer}