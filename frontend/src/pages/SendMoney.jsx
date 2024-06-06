import { useState,useEffect } from "react";
import { Heading } from "../components/Heading";
import { InputComponentLikeFirstName } from "../components/InputComponentLikeFirstName";
import { SignButton } from "../components/SignButton";
import { SubHeading } from "../components/SubHeading";
import { useSearchParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


export function SendMoney(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [money,setMoney] = useState(0);
    const [token,setToken] = useState("");
    const navigate = useNavigate();

    useEffect(function(){
        const gettoken = localStorage.getItem('token');
        if(gettoken){
            setToken(gettoken);
        }else{
            console.log("gettokan fail hua")
        }
    },[token]);

    return (
        <div className="bg-neutral-600 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg text-center mx-4 p-10">
                    <Heading>Send Money</Heading>
                    <SubHeading>{name}</SubHeading>
                    <InputComponentLikeFirstName onChange={function(e){setMoney(e.target.value)}} name={"Ammount in Rs"} placeholder={"Enter Amount"}></InputComponentLikeFirstName>
                    <SignButton onClick={async function(){
                        console.log(id)
                        
                        try{const res = await axios.post("http://localhost:3000/api/v1/account/transfer",
                        {
                            to : id,
                            amount : money
                        },
                        {
                            headers:{
                            'Content-Type': 'application/json',
                            'authorization' : token
                        }
                    })

                    console.log(id)
                    if(res.data.message == "Transaction Successful"){
                        console.log("All good")
                    }
                    
                    navigate("/success")
                }
                    catch(err){
                        console.log(err);
                    }

                    }}>Invite Transfer</SignButton>
                </div>
            </div>
        </div>
    )
}