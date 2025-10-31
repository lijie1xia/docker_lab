import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { lightTheme, darkTheme } from "../styles/theme"

const ThemeBox=()=>{
//解构
   const {themeMode} =useContext(ThemeContext)
   const currentTheme= themeMode === 'light' ? lightTheme: darkTheme

const style={
    backgroundColor: currentTheme.background,
    color: currentTheme.text,
}



    return(
        <div style={style}>
            当前的主题是：{themeMode}
        </div>
    )
}
export default ThemeBox