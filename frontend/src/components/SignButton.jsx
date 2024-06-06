import { RecoilRoot } from "recoil";

export function SignButton({children,onClick}){
    return(
            <button onClick={onClick} className="text-xl rounded-md font-medium text-white w-5/6 p-3 mb-1.5 bg-gray-700 hover:bg-gray-900 active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300">{children}</button>
    )
}