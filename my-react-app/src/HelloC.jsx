//父组件
import React from "react";
import Son from "./Son";
class HelloC extends React.Component {
    state= {
        msg: 'hello c'
    }

    render() {
        return (
            <div>
                <h1>这是父组件hello C,我的数据是:{this.state.msg}</h1>
                <Son msg={this.state.msg}></Son>
               
            </div>
        )
    }
    
}
export default HelloC;