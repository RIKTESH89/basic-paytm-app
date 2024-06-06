import { RecoilRoot } from "recoil";

export function InputComponentLikeFirstName({name , placeholder,onChange}){
    return(
        <div className="m-5 py-3">
            <div className="text-base sm:text-xl font-medium text-left p-2">{name}</div>
            <input onChange={onChange} className=" p-4 border-black shadow w-full" type="text" placeholder={placeholder}/>
        </div>
    )
}