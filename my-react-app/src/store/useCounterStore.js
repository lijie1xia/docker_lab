import { create } from "zustand";


const useCounterStore=create(
    //箭头函数
    (set)=>({
        //定义状态
        count:0,
        //定义改变状态的方法 inc,dec
        inc:()=>set((state)=>({count:state.count+1})),
        dec:()=>set((state)=>({count:state.count-1})),
    }
))
//导出
export default useCounterStore;