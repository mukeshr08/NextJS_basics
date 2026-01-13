'use client'
import { useRouter } from "next/navigation"
export default function dashboard(){
    const route=useRouter()
    const back=()=>{
        route.push('/')
    }
    return (
    
    <>
   <h1>Dashboard page</h1>
    <button onClick={back}>back</button>
     </>)
}