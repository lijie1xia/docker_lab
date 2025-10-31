import useCounterStore from "../store/useCounterStore";

const Counter=()=>{
    //这个钩子 useCounterStore 返回的是{}对象
    /**{
        //定义状态
        count:0,
        //定义改变状态的方法 inc,dec
        inc:()=>set((state)=>({count:state.count+1})),
        dec:()=>set((state)=>({count:state.count-1})),
    } */
   //解构赋值 解构数组。解构对象
   const {count,inc,dec}=useCounterStore();

    return(
        <div>
            <h1>计数器的值为{count}</h1>
            <button onClick={inc}>加1</button>
            <button onClick={dec}>减1</button>
        </div>
    )
}

export default Counter;