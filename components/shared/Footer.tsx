import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
 return (
  <footer className='border-t '>
   <div className='flex-center wwrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
    <Link href='/'></Link >
    <Image src='/assets/images/logo.svg' alt='logo' width={128} height={38} />
    <p> 2024 Await Events. All Rights reserved.</p>
   </div>
  </footer>
 )
}

export default Footer
