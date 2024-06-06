import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputComponentLikeFirstName} from "../components/InputComponentLikeFirstName"
import { BottomWarning } from "../components/BottomWarning";
import {SignButton} from "../components/SignButton"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userNameAtom , passwordAtom, firstNameAtom } from "../store/Atoms"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/3369656.svg"
import { NavBar } from "../components/Navbar";

export function Signin(){
 const [ userName, setUserName ] = useRecoilState(userNameAtom);
 const [ password,setPassword ] = useRecoilState(passwordAtom);
 const [firstName, setFirstName] = useRecoilState(firstNameAtom);

 const navigate = useNavigate();

    return (
        <div>
            <NavBar special={"signin"}></NavBar>
            <div className="bg-white h-screen flex justify-around">
            <div className="flex flex-col justify-around">
                <div className="bg-gray-100 rounded-lg text-center mx-4 mb-16">
                    <Heading>Sign in</Heading>
                    <SubHeading>Enter your Credentials to access your account</SubHeading>
                    <InputComponentLikeFirstName onChange={function(e){setUserName(e.target.value)}} name={"Email"} placeholder={"random@gmail.com"}></InputComponentLikeFirstName>
                    <InputComponentLikeFirstName onChange={function(e){setPassword(e.target.value)}} name={"Password"} placeholder={"123456789"}></InputComponentLikeFirstName>
                    <SignButton onClick={ async function(){
                        try{
                            const response = await axios.post("https://basic-paytm-app-1.onrender.com/api/v1/user/signin",{
                                userName : userName,
                                password : password
                            },{
                                headers: {
                                    'Content-Type': 'application/json'
                                  } 
                            })

                            localStorage.setItem("token", "Bearer "+response.data.token);
                            setFirstName(response.data.name)
                            console.log(response.data)
                            navigate("/Dashboard")
                        }
                        catch(err){
                            console.log(err)
                            alert("Invalid / Wrong Inputs")
                        }
                    }}>Sign in</SignButton>
                    <BottomWarning Warning={"Don't have an account?"} login={"Signup"} link={"/signup"}></BottomWarning>
                </div>
            </div>
            <img className="hidden lg:h-5/6  lg:inline-flex" src={logo} alt="logo to appear here" />
        </div>
        </div>
    )
}