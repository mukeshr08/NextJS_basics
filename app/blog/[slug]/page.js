'use client'
import { useParams } from "next/navigation"
export default function slug({params}){
    const paramsfun=useParams()

    return( 
    <>
    <h1>slug page</h1>
    <h1>My Post : {paramsfun.slug}</h1>

    </>)

}