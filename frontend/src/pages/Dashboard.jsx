import React from "react"
import logo from "../assets/6134223.svg"
import { Topbar } from "../components/TopBar"
import { Balance } from "../components/Balance"
import { SearchBar } from "../components/SearchBar"
import axios from 'axios'
import { useState,useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { firstNameAtom } from '../store/Atoms';

export function Dashboard(){
    const [token,setToken] = useState("")
    const [balance,setAmount] = useState(0)
    const [name,setName] = useRecoilState(firstNameAtom);

    useEffect(function(){
        const gettoken = localStorage.getItem('token');
        if(gettoken){
            setToken(gettoken);
        }else{
            console.log("gettokan fail hua")
        }
    },[token]);

    useEffect(function(){
        axios.get("https://basic-paytm-app-1.onrender.com/api/v1/account/balance",{
            headers:{
                'Content-Type': 'application/json',
                'authorization' : token
            }
        }).then(function(res){
            const data = res.data.balance;
            setAmount(data);
            setName(res.data.firstName)
        })
    },[token]);


    return(
        <div>
        <Topbar name={name}/>
        <Balance balance={balance}/>
        <SearchBar />
        </div>
    )
}