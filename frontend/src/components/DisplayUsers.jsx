import { UserCard } from "./UserCard"

export function DisplayUsers({users}){
    return(
        <div>
            {users.map(function(value){
                return (
                    <div>
                        <UserCard value={value}/>
                    </div>
                )
            })}
        </div>
    )
}