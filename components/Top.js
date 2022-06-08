
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import PicOne from '../public/items/slider5.jpg'



export default function Top() {
  return (
    <>
     <div className="bg-white relative">
       <>
         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               
                 <Image src={PicOne} alt="Pic One" className="" width={1200} height={45} />
               
             </div>
         </div>
       </>
   </div>
   </>
  )
}
