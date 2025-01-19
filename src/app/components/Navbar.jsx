import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainLogo from '../../../public/text-logo.png'

function Navbar() {
  return (
    <>

<nav className='Navbar-container absolute z-10 flex items-center justify-center w-screen p-0 m-0 
      bg-[#bd9c8e]
       '>
      
       <div className='Navbar flex items-center ml-14 gap-12 p-2'>
     
    
       <Link href='/'> <p className='font-poppins text-white text-sm font-medium'>Home</p></Link>
        <Link href='/About'> <p className='font-poppins text-white text-sm font-medium'>About</p></Link>
        <Link href='/Products'> <p className='font-poppins text-white text-sm font-medium'>Products</p></Link>
        <Link href='/BulkOrder'> <p className='font-poppins text-white text-sm font-medium'>Bulk Order</p></Link>
        <Link href='/Contact'> <p className='font-poppins text-white text-sm font-medium'>Contact</p></Link>
       </div> 
       
      
        
    
      </nav>






    </>
  )
}

export default Navbar