
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
const ThemeButton=()=>{
    //解构出changeTheme方法
   const {changeTheme}=useContext(ThemeContext)
    return(
        <button onClick={changeTheme}>点我切换主题</button>
    )

}
export default ThemeButton