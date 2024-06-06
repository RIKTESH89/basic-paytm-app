


export function Balance({balance}){

    return(
        <div className='text-2xl font-bold m-4 px-1 py-6'>Your Balance:   Rs {Math.floor(balance)}</div>
    )
}