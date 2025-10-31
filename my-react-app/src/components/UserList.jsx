import { useState,useEffect } from "react"

const UserList=()=>{
    //定义状态，存储用户数据 函数，空数组
const [users,setUsers]=useState([])


//网络请求是一个副作用，使用useEffect
//副作用：本职工作，但是有其他额外的事情要做
//
useEffect(
()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>{
    if(!res.ok){
        throw new Error('网络错误')
    }
    return res.json()
  }).then(data=>{
    setUsers(data)
  }
  )
}
,[]

)
  
    return(
        
        <div>
            <ul>
                {
                   users.map(
                        (user)=>
                        <li key={user.id}>
                            {user.name}
                        </li>
                   ) 
                }
            </ul>

        </div>
    )

}
export default UserList;