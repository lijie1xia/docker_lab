import { useState, useEffect} from "react";
//函数组件
const Counter=()=>{
    //hook useState 返回一个数组
    const [count,setCount]=useState(0);//count=0
    const [name,setName]=useState("sb");
    //副作用
    //手动修改dom,title
    useEffect(
        ()=>{
        document.title=`傻逼点我${count}次` 
    },[count]

)
    //事件处理函数，改变count的值   
    const changeCount=()=>{
        setCount(count+1);
    }
    const changeName=()=>{
        setName("bigsb")
    }

    return(
        <div>
            <h1>Counter组件</h1>
            <button onClick={changeCount}>计算器的值是：{count}</button>
            <button onClick={changeName}>点我:{name}</button>
        </div>
    )
}
export default Counter;