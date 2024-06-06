import { RecoilRoot } from "recoil";
import { Link,useNavigate } from 'react-router-dom'

export function BottomWarning({Warning,login,link}){

    return (
        <div className="flex justify-center text-lg mb-6">
            <div className="mx-2">{Warning}</div>
            <Link className="underline" to={link}>{login}</Link>
        </div>
    )
}