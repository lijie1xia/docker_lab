import React, { useState } from 'react';
import axios from 'axios';

const AxiosUserList = () => {
   const [users, setUsers] = useState([])
    // const getUsers = () => {
    //     const apiUrl="https://jsonplaceholder.typicode.com/users";

    //     axios.get(apiUrl)
    //     .then((response) => {
    //         console.log(response.data)
    //         setUsers(response.data)
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching users:", error.massage);
    //     });
    // }

    const getUsers = async () => {
        const apiUrl="https://jsonplaceholder.typicode.com/users";
        try {
           const res= await axios.get(apiUrl);
            console.log(res.data)
            setUsers(res.data)
        } catch (error) {
            console.log("Error fetching users:", error.message);
        }
        
    }
    return(
<div>
    <h1>Axios User List get 请求</h1>
    <button onClick={getUsers}>点击发起get请求</button>

    <ul> 
       {
        // 这里是一个map函数，遍历users数组，返回每个用户的名字
        users.map((user) => (
            <li key={user.id}>{user.name}</li>
        )
            
        )
       }
    </ul>
</div>

    )
}
export default AxiosUserList;