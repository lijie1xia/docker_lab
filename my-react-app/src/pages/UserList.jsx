import axios from "axios";
import useUserStore from "../store/useUserStore"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserList=()=>{

  const {users,setUsers} =  useUserStore();

  useEffect(
    ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data);
        })
        .catch((error)=>{
            console.error("Error fetching users:", error.message);
        });
    },[setUsers] 
  )



    return(
        <div>
            <h1>User List</h1>
            <ul>
            {
                users.map(
                    user=>(
                        <li key={user.id}>

                            <Link to={`/users/${user.id}`}>{user.name} </Link>
           
                            </li>
                    )
                )
            }        

            </ul>
        </div>
    )
}
export default UserList;