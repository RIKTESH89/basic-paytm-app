import { useState,useEffect } from "react"
import logo from "../assets/20945410.svg"
import { useNavigate } from 'react-router-dom'


export function TransactionSuccessful(){
    const [timer,setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const counter =
          timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
          console.log("running")
        return () => clearInterval(counter);
      }, [timer]);

    if(timer==0){
        navigate("/Dashboard")
    }


    return (
        <div className="flex justify-center h-screen">
           <div className="flex flex-col justify-center">
           <div className="text-center">
           <div className="sm:mt-20 font-medium text-2xl">Taking you back to dashboard in {timer}...</div>
            <img className="max-h-screen" src={logo} alt="logo to appear here" />
           </div>
           </div>
        </div>
    )
}