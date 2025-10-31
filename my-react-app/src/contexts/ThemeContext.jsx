import { createContext ,useState } from "react";

export const ThemeContext= createContext();

export const ThemeProvider = ({children}) => {
   const [themeMode,setThemeMode] = useState('light');
   const changeTheme = () => {
       setThemeMode(prev=>{
        let newTheme =prev === 'light' ? 'dark' : 'light';
        return newTheme;
       })
   }

return(
    <ThemeContext.Provider value={{themeMode,changeTheme}}>
        {children}
    </ThemeContext.Provider>
)

}