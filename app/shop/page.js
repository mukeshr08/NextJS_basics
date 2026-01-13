'use client'
import { useRouter } from "next/navigation"
export default function shop(){
    const route=useRouter()
        const back =()=>{
            route.push('/')
        }
    return (
        <>
        <h1>Shop page</h1>
        <button onClick={back}>back</button>

        
        </>
    )
}