import axios from "axios";
import { useEffect, useState } from "react"
import { DisplayUsers } from "./DisplayUsers";

export function SearchBar(){
const [users,setUsers] = useState([]);
const [token,setToken] = useState("")
const [filter,setFilter] = useState("");

useEffect(function(){
    const gettoken = localStorage.getItem('token');
    if(gettoken){
        setToken(gettoken);
    }else{
        console.log("gettokan fail hua")
    }
},[]);

useEffect(function(){
    
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
        headers:{
            'Content-Type': 'application/json',
            'authorization' : token
        }
    }).then(function(res){
        setUsers(res.data.user);
    })
},[token]);

useEffect(function(){
    const gettoken = localStorage.getItem('token');
    if(gettoken){
        setToken(gettoken);
    }else{
        console.log("gettokan fail hua")
    }
},[token]);

useEffect(function(){
    const getData = setTimeout(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
        headers:{
            'Content-Type': 'application/json',
            'authorization' : token
        }
    }).then(function(res){
        setUsers(res.data.user);
        console.log(users)
    })
    },100)
    return () => clearTimeout(getData)
},[filter]);

    return(
        <div className="mx-4">
            <div className="text-3xl font-bold my-4 px-1">Users</div>
            <input onChange={ async function(e){
                setFilter(e.target.value);
            }} className="text-xl rounded border w-full px-8 py-3 mb-10" type="text" placeholder="Search users ..."/>
            <DisplayUsers users={users}/>
        </div>
    )
}