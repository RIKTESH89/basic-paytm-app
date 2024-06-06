import Drawer from "./Drawer";

export function Topbar({name}){

    return(
        <div>
            <div className="flex justify-between pt-5 m-0 px-0 pb-4 border">
                <div className="text-3xl font-bold pl-4">Payments App</div>
                <div className="flex font-medium text-lg mx-5">
                    <div className="pt-2.5 sm:mr-3">Hello, {name}</div>
                    <Drawer/>
                </div>
            </div>
        </div>
    )
}