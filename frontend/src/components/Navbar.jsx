import { Link } from 'react-router-dom'

export function NavBar({special}){
    const fill="bg-gray-700 hover:bg-gray-900 active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
    let classh="",classin="",classup=""
    if(special=="Home"){
        classh="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"+"border rounded-full flex flex-row justify-center items-center text-white text-xs sm:text-xl"
        classin=" rounded-full flex flex-row justify-center items-center text-gray-500 text-xs sm:text-xl"
        classup=" rounded-full flex flex-row justify-center items-center text-gray-500 text-xs sm:text-xl"
    }else if(special=="signin"){
        classin=fill+"border rounded-full flex flex-row justify-center items-center text-white text-xs sm:text-xl"
        classup=" rounded-full  flex flex-row justify-center items-center text-gray-500 text-xs sm:text-xl"
        classh=" rounded-full flex flex-row justify-center items-center text-gray-500 text-xs sm:text-xl"
    }else if(special=="signup"){
        classup=fill+"border rounded-full flex flex-row justify-center items-center text-white text-xs sm:text-xl"
        classin=" rounded-full  flex flex-row justify-center items-center text-gray-500 text-xs sm:text-xl"
        classh=" rounded-full flex flex-row justify-center items-center text-gray-500 text-xs sm:text-xl"
    }   

    return (
        <div>
            <div className="grid grid-cols-6 pt-5 m-0 px-0 pb-4 border">
                <div className="col-span-3 text-xl md:text-3xl font-bold pl-4">Payment App</div>
                <div className="col-end-7 col-span-3 md:col-end-7 md:col-span-2 lg:col-end-7 lg:col-span-1 grid grid-cols-3 gap-4 font-medium md:text-lg mx-0 sm:px-1">
                <Link className={classin} to="/signin">Sign in</Link>
                <Link className={classup} to="/signup">Sign up</Link>
                <Link className={classh} to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}