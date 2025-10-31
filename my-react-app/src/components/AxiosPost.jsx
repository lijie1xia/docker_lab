import React, { useState } from 'react'
import axios from 'axios'
const AxiosPost=()=>{
    //函数中组件中维护的状态/数据/变量
   const [posts, setPosts] = useState([])
   const sendPost=()=>{
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const post={
        title: 'foo',//标题是什么？
        body: 'bar',//帖子的正文是什么？
        userId: 1,//哪一个用户发的？
    }
    axios.post(apiUrl,post)
    .then(res=>{
        console.log(res.data)
        setPosts(res.data)
    })
    .catch(err=>{
        console.log(err.message)
    })

   }


return(
    <div>
        <h1>Axios Post</h1>
        <button onClick={sendPost}>Post发起请求</button>
        <p>{JSON.stringify(posts,null,2)}</p>
    </div>

)

}
export default AxiosPost;