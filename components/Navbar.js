import { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "react-dom";
import { useNavigate } from "react-router-dom";
import Search from "../pages/search";
import { useRouter } from "next/router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ search }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = search.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className="bg-red-900 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
          <div className="relative flex items-center justify-between mr-6 sm:relative sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center w-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mx-3 px-8 aspect-w-1 aspect-h-1 md:flex-shrink-0 md:mx-4 md:px-10 md:aspect-w-1 md:aspect-h-1">
                  <Link href="/">
                    <a>
                      <Image
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        src="/logos/owino.png"
                        alt="logo"
                        layout="fill"
                        // width={120}
                        // height={120}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className=" md:block md:relative md:w-full md:mx-32 md:max-w-3xl">
                <div className="relative m-0">
                  <div className="relative flex flex-wrap items-stretch w-full">
                    <input
                      type="search"
                      value={wordEntered}
                      onChange={handleFilter}
                      className="w-40 mt-3 mb-2 h-7 sm:w-full sm:h-10 py-1 px-1 text-gray-700 rounded-full transition ease-out focus:text-gray-700 placeholder:italic placeholder:text-slate-400 pl-7"
                      placeholder="Search"
                    ></input>
                  </div>
                  {/*Search results */}
                  <div className="bg-500">
                    {filteredData.length === 0 ? (
                      <div className="flex -ml-1 box-border">
                        <svg
                          className="w-6 h-6 absolute top-0 right-0 mr-3 mt-4 sm:w-6 sm:h-6 sm:absolute sm:top-0 sm:right-0 sm:mr-3 sm:mt-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLineCap="round"
                            strokeLineJoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      <button
                        className="w-6 h-6 absolute top-0 right-0 mr-3 mt-4 sm:w-6 sm:h-6 sm:absolute sm:top-0 sm:right-0 sm:mr-3 sm:mt-5"
                        onClick={clearInput}
                      >
                        X
                      </button>
                    )}

                    {filteredData.length != 0 && (
                      <div className="absolute z-50 bg-white w-full rounded-xl mx-0 mb-0 mt-1 shadow-sm">
                        {filteredData.slice(0, 6).map((value, key) => {
                          return (
                            // <a key={key.id} href={value.get_absoulute_url}>{value.name}</a>

                            <div
                              key={key.id}
                              className="w-fulltext-sm font-medium text-gray-900 border-gray-200 dark:border-gray-600 dark:text-black z-50 truncate"
                            >
                              <Link
                                href={`${encodeURI(value.get_absoulute_url)}`}
                                as={value.get_absoulute_url}
                              >
                                <a
                                  className="w-full px-4 py-4 dark:border-gray-600"
                                  href={`${encodeURI(value.get_absoulute_url)}`}
                                >
                                  {/* <div className="w-10 p-1 float-left border-2 border-solid bg-white">
                                    <Image className="" src={value.get_thumbnail} alt={value.get_name} layout="fill"/>
                                  </div> */}
                                  {value.name}
                                </a>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {/* End of search results */}
                </div>
              </div>
            </div>
            {/* small screen search */}
                {/* <div className="block md:hidden">
                  <input
                    type="search"
                    name="search"
                    
                    className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12 focus:w-full focus:border-white focus:cursor-text focus:pl-16 focus:pr-40"
                  />
                  <svg
                    className="absolute inset-y-0 my-auto h-8 w-12 px-3.5 stroke-white border-r border-transparent peer-focus:border-white peer-focus:stroke-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div> */}
            {/* End of small screen search */}
          </div>
        </div>
      </div>

      {/* Test Dropdown Menu */}
      {/* <div className="relative box-border border-white border-solid border">
        <div className="w-full mx-auto px-12">
          <div className="flex flex-wrap -mx-4">
            <div className="flex flex-grow-0 flex-shrink-0 basis-full max-w-full">
              <div className="w-full items-center justify-between flex">
                <ul className="flex list-none p-0 my-0 -mx-3">
                  <li className="flex font-semibold">
                    <Link href={`/`}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="flex font-semibold">
                    <Link href={`/category/men`}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        Men
                      </a>
                    </Link>
                  </li>
                  <li className="flex font-semibold">
                    <Link href={`/category/kids`}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        Kids
                      </a>
                    </Link>
                  </li>
                  <li className="flex font-semibold">
                    <Link href={`/category/women`}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        Women
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className="flex list-none p-0 my-0 -mx-3">
                  <li className="flex font-semibold">
                    <Link href={"/"}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        Download
                        <span className="pl-2 text-xs font-semibold">
                          <FontAwesomeIcon icon={faApple} size="2x" />
                        </span>
                      </a>
                    </Link>
                    <Link href={"/"}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        <span className="pl-2 text-xs font-semibold">
                          <FontAwesomeIcon icon={faAndroid} size="2x" />
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="flex font-semibold">
                    <Link href={"/"}>
                      <a className="flex cursor-pointer items-center py-2 px-3">
                        Contact Us
                        <span className="pl-2 text-xs font-semibold">
                          <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End of test dropdown Menu */}

      {/* Styling Menu to use or rather setting it up */}
      
      <Disclosure as="nav" className="bg-white ">
        {({ open }) => (
          <>
            <div className="w-full mx-auto px-2 sm:px-2 lg:px-2">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
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
              </div> */}

                
                  <div className="w-full mx-auto px-12 hidden sm:block sm:ml-6">
                    <div className="flex flex-wrap -mx-4">
                      <div className="flex flex-grow-0 flex-shrink-0 basis-full max-w-full">
                        <div className="w-full items-center justify-between flex">
                          <ul className="flex list-none p-0 my-0 -mx-3">
                            <li className="flex font-semibold">
                              <Link href={`/`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={`/category/men`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Men
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={`/category/kids`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Kids
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={`/category/women`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Women
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <ul className="flex list-none p-0 my-0 -mx-3">
                            <li className="flex font-semibold">
                              <Link href={"/"}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Download
                                  <span className="pl-2 text-xs font-semibold">
                                    <FontAwesomeIcon icon={faApple} size="2x" />
                                  </span>
                                </a>
                              </Link>
                              <Link href={"/"}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  <span className="pl-2 text-xs font-semibold">
                                    <FontAwesomeIcon
                                      icon={faAndroid}
                                      size="2x"
                                    />
                                  </span>
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={"/"}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Contact Us
                                  <span className="pl-2 text-xs font-semibold">
                                    <FontAwesomeIcon
                                      icon={faEnvelope}
                                      size="2x"
                                    />
                                  </span>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  {/* <ul className="flex list-none p-0 my-0 -mx-3">
                    <li className="flex font-semibold">
                      <Link href={"/"}>
                        <a className="flex cursor-pointer items-center py-2 px-3">
                          Download
                          <span className="pl-2 text-xs font-semibold">
                            <FontAwesomeIcon icon={faApple} size="2x" />
                          </span>
                        </a>
                      </Link>
                      <Link href={"/"}>
                        <a className="flex cursor-pointer items-center py-2 px-3">
                          <span className="pl-2 text-xs font-semibold">
                            <FontAwesomeIcon icon={faAndroid} size="2x" />
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="flex font-semibold">
                      <Link href={"/"}>
                        <a className="flex cursor-pointer items-center py-2 px-3">
                          Contact Us
                          <span className="pl-2 text-xs font-semibold">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul> */}

                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                
                        <div className="">
                          <ul className="">
                            <li className="flex font-semibold">
                              <Link href={`/`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={`/category/men`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Men
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={`/category/kids`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Kids
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={`/category/women`}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Women
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <ul className="">
                            <li className="flex font-semibold">
                              <Link href={"/"}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Download
                                  <span className="pl-2 text-xs font-semibold">
                                    <FontAwesomeIcon icon={faApple} size="2x" />
                                  </span>
                                </a>
                              </Link>
                              <Link href={"/"}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  <span className="pl-2 text-xs font-semibold">
                                    <FontAwesomeIcon
                                      icon={faAndroid}
                                      size="2x"
                                    />
                                  </span>
                                </a>
                              </Link>
                            </li>
                            <li className="flex font-semibold">
                              <Link href={"/"}>
                                <a className="flex cursor-pointer items-center py-2 px-3">
                                  Contact Us
                                  <span className="pl-2 text-xs font-semibold">
                                    <FontAwesomeIcon
                                      icon={faEnvelope}
                                      size="2x"
                                    />
                                  </span>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    
    </>
  );
}
