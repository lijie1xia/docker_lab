import React from 'react';
import SonA from './SonA';
import SonB from './SonB';
//类组件。父组件
class Message extends React.Component {
    //定义了状态
    state={
        message:'Hello World'//初始状态
    }
    //行为/改变状态，给子组件调用传递参数

    changeMessage=(msg)=>{
        this.setState({message:msg})
    }



    render() {
        return(
            <div>
                <h1>我是Message父组件,提供数据为：{this.state.message}</h1>
                <SonA message={this.state.message}></SonA>
                <SonB changeMessage={this.changeMessage} ></SonB>
    
            </div>
        )
    }
    
}
export default Message