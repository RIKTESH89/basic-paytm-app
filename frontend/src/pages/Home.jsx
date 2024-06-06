import { NavBar } from "../components/Navbar";
import logo from "../assets/4198103.svg"
import { useNavigate } from 'react-router-dom'

export function Home(){
    const navigate = useNavigate();

    return (
    <div>
        <NavBar special={"Home"} specialLink={""}/>
        <div className="bg-white h-screen flex justify-around">
            <div className="flex flex-col justify-around">
                <div className="rounded-lg text-left pl-5 pb-20 sm:pt-16 sm:pl-32 sm:pr-20 sm:mb-60">
                    <div className="text-gray-400 text-6xl sm:text-8xl font-light">SECURE</div>
                    <div className="text-gray-800 text-7xl sm:text-8xl font-medium mb-8">Payment</div>
                    <div className="text-lg sm:text-xl pr-28 pb-8 font-light">Seamlessly manage your finances with our payment app, offering fast, secure, and convenient transactions. Simplify your payments with real-time tracking and robust security features.</div>
                    <button onClick={function(){
                        navigate("/signup")
                    }} class="text-2xl text-white px-8 py-3 font-medium rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                        Get Started
                    </button>
                </div>
            </div>
            <img className="hidden lg:h-5/6  lg:inline-flex mt-10 mr-32" src={logo} alt="logo to appear here" />
        </div>
    </div>
)
}