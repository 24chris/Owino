import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  // const [keyword, setKeyword] = useState('')

  const onInputChange = (e) =>{
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }


  return (
    <>
      <div className="bg-red-900 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center w-full">
              <div className="flex items-center"> 
              <Link href="/">
              <a>
                <Image
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  src="/logos/owino.png"
                  alt="logo"
                  width={120}
                  height={120}
                />
                </a>
                </Link>
              </div> 
              <div className="relative w-full mx-32 max-w-3xl">
                <form method="get" action="/search">
                  <div className="relative m-0">
                    <div className="relative flex flex-wrap items-stretch w-full">
                    {/* <button className="bg-white absolute ml-4 mt-3 px-3 rounded"><i className="pointer-events-none">Hello</i></button> */}
                    <input type="text" name="query" onChange={onInputChange} className="w-40 mt-3 mb-2 h-7 sm:w-full sm:h-10 py-1 px-1 text-gray-700 rounded-full transition ease-out focus:text-gray-700 placeholder:italic placeholder:text-slate-400 pl-7" placeholder="Search"></input>
                    <div className="flex -ml-1 box-border">
                      {/* <button className="my-auto h-3 w-3 border-r border-transparent peer-focus:border-gray-800 peer-focus:stroke-lime-300 sm:bg-blue-300 absolute top-0 right-0 mt-4 mr-2 py-4  px-5 rounded">
                      
                      </button> */}
                      <svg className="w-6 h-6 absolute top-0 right-0 mr-3 mt-4 sm:w-6 sm:h-6 sm:absolute sm:top-0 sm:right-0 sm:mr-3 sm:mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border bg-white border-white border-solid border">
        <div className="border-box mx-auto w-full xl:px-12">
          <div className="flex flex-wrap -mx-4">
            <div className="flex flex-grow-0 flex-shrink-0 basis-0 max-w-full">
              <div className="w-full items-center justify-between box-border flex mx-5">
                <ul className="flex">
                  <li className="box-border flex text-sm px-2 font-semibold">
                    <Link href={`/category/men`}>
                    <a >
                    Men
                    </a>
                    </Link>
                  </li>
                  <li className="box-border flex text-sm px-2 font-semibold">
                    <Link href={`/category/kids`}>
                    <a>
                    Kids
                    </a>
                    </Link>
                  </li>
                  <li className="box-border flex text-sm px-2 font-semibold">
                    <Link href={`/`}>
                    <a>
                    Home 
                    </a>
                    </Link>
                  </li>
                  <li className="box-border flex text-sm px-2 font-semibold">
                    <Link href={`/category/women`}>
                    <a>
                    Women
                    </a>
                    </Link>
                  </li>
                </ul>
                <ul className="flex right-0 absolute">
                  <li className="box-border px-3 text-sm font-semibold">
                    <a href="#">
                    Download
                    </a>
                  </li>
                  <li className="box-border px-3 text-sm font-semibold">
                    <a href="#">
                    Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative bg-white border-b-2 border-solid">
        <div className="mx-auto px-12">
          <div className="flex flex-wrap -mx-4">
            <div className="flex flex-grow-0 flex-shrink-0 flex-basis-0 max-w-fit">
              <div className="flex w-full justify-between items-center">
                <ul className="flex -mx-4 left-0">
                  <li className="flex">
                    <Link href="#">
                      <a>
                        Men's Shop
                      </a>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link href="#">
                      <a>
                        Women's Shop
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className="flex right-4">
                  <li className="flex">
                  <Link href="#">
                  <a>
                    Download App
                  </a>
                  </Link>
                  </li>
                  <li className="flex mx-20">
                  <Link href="#">
                  <a>
                    Contact Us
                  </a>
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="">
    <Disclosure as="nav" className="bg-red-900 h-28">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
              </div>
              <div className="container flex flex-wrap  mx-auto">
                <div className="flex-shrink-0 flex items-center mt-12">
                  <Image
                    className=""
                    src="/logos/owino.png"
                    alt="logo"
                    width={200} height={200}
                  />
                  <form action="">
      <div className=""> 
        <div className="md:ml-auto md:mb-6">
          <p className="text-gray-800">
            <strong></strong>
          </p>
        </div>
          <input
            type="text"
            className="
              form-control
              block
              ml-2
              px-20
              py-3
              mt-4
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-red-900
              rounded-full
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none
            "
            placeholder="Search for products"/>
        </div> 

    </form>
                
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              </div>
            </div>
          </div>
        
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
    {/* Ad Section */}
      {/*  <Disclosure as="nav" className="bg-white">
       <>
         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
           <div className="relative flex items-center justify-between h-16">
             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               <div className="hidden sm:block sm:ml-6">
                 <Link href={`category/men`}>
                 <a className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4">
                   Men's Shop
                 </a>
                 </Link>
                 <Link href={`category/kids`}>
                 <a className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4">
                   Kid's Corner
                 </a>
                 </Link>
                 <Link href={`category/home-supplies`}>
                 <a className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4">
                   Home Supplies
                 </a>
                 </Link>
                 <Link href={`category/women`}>
                 <a className="sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4">
                   Women's Shop
                 </a>
                 </Link>
               </div>
               <div className="items-end">
               <a href="#" className="sm:mr-8 sm:mb-0 mb-4 text-right text-smaller mr-4">
                   Download App
                 </a>
                 <a href="#" className="sm:mr-8 sm:mb-0 mb-4 text-right text-smaller mr-4">
                   Contact Us
                 </a>
               </div>
             </div>
           </div>
         </div>
       </>
   </Disclosure>
   </div> */}
    </>
  );
}
