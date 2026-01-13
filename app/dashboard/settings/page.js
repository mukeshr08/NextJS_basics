'use client'
import { useRouter } from 'next/navigation';
export default function settings(){
    const router=useRouter()
    const back=()=>{
        router.push('/dashboard')
    }
    return (
    <>
    <h2>settings page</h2>
    <button onClick={back} className='border-black'>back</button>
    </>
    
         
    )
    
    
}