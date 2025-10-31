const Son=(props)=>{
    const handlerClick=()=>{
       props.changeCount(100)
    }
    return  (
        <div>
            <h1>我是子组件 Son,我接受父组件的值是:{props.count}</h1>
            <button onClick={handlerClick}>点击之后修改父组件的count值</button>
            
    
        </div>
    )
}
export default Son