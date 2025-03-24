import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    const data  = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Products',
            link: '/products'
        },
        {
            name: 'About',
            link: '/about'
        }, 
        {
            name: 'Contact',
            link: '/contact'
        }
    ]
  return (
   <nav className='w-full p-4 bg-gray-300 flex justify-between items-center'>
    <div>
        <Link href={'/'}>Logo</Link>
    </div>
    <div>
        <ul className='space-x-12 bg-red-200'>
          {
           data.map((item, id)=>{
            return(<li key={id} className='inline-block hover:text-orange-500 text-lg'><Link href={item.link}>{item.name}</Link></li>)
           })
          }
           
        </ul>
    </div>
    <div className='flex gap-4 '>
    <button className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md' onClick={()=> router.push("/pages/login")}>Login</button>
    <button className='border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white py-2 px-4 rounded-md' onClick={()=> router.push("/pages/signup")}>Signup</button>
    </div>

   </nav>
  )
}

export default Navbar
