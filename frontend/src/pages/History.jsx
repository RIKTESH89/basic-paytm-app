import { useState,useEffect } from "react";
import axios from "axios";
export function History(){
    const [token,setToken] = useState("")
    const [users,setUsers]=useState([]);

    useEffect(function(){
        const gettoken = localStorage.getItem('token');
        if(gettoken){
            setToken(gettoken);
        }else{
            console.log("gettokan fail hua")
        }
    },[token]);

    useEffect(function(){
        axios.get("https://basic-paytm-app-1.onrender.com/api/v1/account/history",{
            headers:{
                'Content-Type': 'application/json',
                'authorization' : token
            }
        }).then(function(res){
            const data = res.data.history;
            setUsers(data);
        })
    },[token]);


    return(
        <div>
            { users? users.map(function(user){
                return <div className="text-3xl font-bold my-4 px-1">{user.from} to {user.to} : {user.amount}</div>
            }): null}
        </div>
    )
}