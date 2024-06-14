import { Link } from "react-router-dom";



export function Balance({balance}){

    return(
        <div className="flex flex-row justify-between">
        <div className='text-lg sm:text-2xl font-bold m-4 px-1 py-6'>Your Balance:   Rs {Math.floor(balance)}</div>
            <Link className="col-span-1 flex justify-end items-center underline mr-5 sm:mr-12 text-md sm:text-2xl" to="/History">Balance History</Link>
        </div>
    )
}