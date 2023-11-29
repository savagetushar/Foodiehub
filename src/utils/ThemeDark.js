import { createContext } from "react";

const DarkModeContext = createContext({
        darkMode:true,
        toggleDarkMode:()=>{}
})

export default DarkModeContext