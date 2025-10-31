const SonB=(props)=>{
    const handerMsg=()=>{
        props.changeMessage('我是子组件SonB传过来的参数')
    }
    return(
        <div>
            <h1>我是子组件SonB</h1>
            <button onClick={handerMsg}>给父组件传参数</button>
           
        </div>
    )
}
export default SonB;