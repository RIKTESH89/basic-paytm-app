import { InputComponentLikeFirstName } from "../components/InputComponentLikeFirstName";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { SignButton } from "../components/SignButton";
import { BottomWarning } from "../components/BottomWarning";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userNameAtom,passwordAtom,lastNameAtom,firstNameAtom } from "../store/Atoms";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/6134223.svg"
import { NavBar } from "../components/Navbar";

export function Signup() {
    const [userName,setUserName] = useRecoilState(userNameAtom);
    const [lastName,setLastName] = useRecoilState(lastNameAtom);
    const [firstName,setFirstName] = useRecoilState(firstNameAtom);
    const [password,setPassword] = useRecoilState(passwordAtom);

    const navigate = useNavigate();

    return (
        <div>
            <NavBar special={"signup"}></NavBar>
            <div className="bg-white h-screen flex justify-around">
           <div className="flex flex-col justify-around">
            <div className="bg-gray-100 rounded-lg text-center mx-0 sm:mx-4">
            
            <Heading>Sign up</Heading>
            <SubHeading>Enter your information to create an account</SubHeading>
            <InputComponentLikeFirstName onChange={function(e){setFirstName(e.target.value)}} name= {"First Name"} placeholder={"Riktesh"} />
            <InputComponentLikeFirstName onChange={function(e){setLastName(e.target.value)}} name= {"Last Name"} placeholder={"Singh"} />
            <InputComponentLikeFirstName onChange={function(e){setUserName(e.target.value)}} name= {"Email"} placeholder={"random123@gmail.com"} />
            <InputComponentLikeFirstName onChange={function(e){setPassword(e.target.value)}} name= {"Password"} placeholder={"123546"} />
            <SignButton onClick={ async function(){
                try{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    userName : userName,
                    lastName : lastName,
                    firstName : firstName,
                    password : password
                },{
                    headers: {
                        'Content-Type': 'application/json'
                      }
                })

                localStorage.setItem("token", "Bearer "+response.data.token);
                navigate("/signin")
            }catch(err){
                alert("Incorrect Password / Email already in use")
            }

            }}>Sign up</SignButton>
            <BottomWarning Warning={"Already have an account?"} login={"Login?"} link={"/signin"}></BottomWarning>
            </div>
        </div>
        <img className="hidden lg:max-h-screen  lg:inline-flex" src={logo} alt="logo to appear here" />
        </div>
        </div>
    );
}