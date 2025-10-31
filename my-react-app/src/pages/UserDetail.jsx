import { useParams } from "react-router-dom";
import useUserStore from "../store/useUserStore"
import { useEffect } from "react";
import axios from "axios";



const UserDetail=()=>{
    // const {id}=useParams();
    
    // const {user,setUser}= useUserStore();
   

    // useEffect(()=>{
    //         const url=`https://jsonplaceholder.typicode.com/users/${id}`
    //         console.log(url);
    //          // axios.get("https://jsonplaceholder.typicode.com/users/1")
    //          // axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         axios.get(url)
    //          .then((res)=>{
    //              setUser(res.data)
    //              console.log(user);
    //          })
    //             .catch((error)=>{
    //                 console.error("Error fetching user:", error.message);
    //             });
    //     }
    //     ,[id]
    // )

    const { id } = useParams();
    const { user, setUser } = useUserStore();
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          setUser(res.data);
        })
        .catch(err => {
          console.log("加载用户详情失败", err);
        });
    }, [id, setUser]);

    if (!user) return <p>数据加载中...</p>; 
    return(
        <div>
            <h1>UserDetail</h1>
           
          
            <p>用户的电话:{user.phone}</p>
            <p>用户的邮箱:{user.email}</p>
        </div>
    )
}
export default UserDetail;