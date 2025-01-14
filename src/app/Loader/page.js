
'use client'


import React, { useEffect, useState } from 'react'
import LogoRaavya from '../../../public/Mainlogo.png' ; 
import { useRouter } from "next/navigation";
import Image from 'next/image';


function OpeningLoader() {

  const [loader,setLoader] = useState(0) ; 
  const router = useRouter() ;

  useEffect(()=>{

    const interval = setInterval(()=>{

      setLoader((prevCouter=>{
        if(prevCouter>=0 && prevCouter<100){
          return prevCouter+1 ; 
        }else{
          return prevCouter ; 
        }
      }))

    },20)

    return()=>{
      clearInterval(interval);
    }
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Home'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
   <>
          <div className='OpeningLoader-Container w-screen h-screen bg-[#9c8276] flex flex-col items-center justify-center'>
           <Image src={LogoRaavya} alt="OpeningLogo-image" className='OpeningLogo-image' width={150} height={150}></Image> 
          
           <div className='Loader-container w-[25vw] sm:w-[15vw] h-[5px] bg-slate-300 rounded-xl'>
            <div className='  h-[5px] bg-white rounded-xl' style={{width:`${loader}%`}}></div>
           </div>
          </div>
   




   </>
  )
}

export default OpeningLoader


