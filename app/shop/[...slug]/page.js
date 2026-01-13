'use client'
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
export default function shop(){
    const  URL=useParams()
    const route=useRouter()
    const back =()=>{
        route.push('/shop')
    }
    return(
        <>
        <h1>My post : {URL.slug[0]}/{URL.slug[1]}/{URL.slug[2]}</h1>
        <button onClick={back}>back</button>
        </>
    )
}