/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  // { name: 'Home', href: '/', current: false },
  // { name: 'About Us', href: '/about', current: false },
  // { name: 'Fixtures & Results', href: '/fixtures', current: false },
  // { name: 'Team', href: '/team', current: false },
  // { name: 'Shop', href: '/shop', current: false },
  // { name: 'Contact Us', href: '/contact', current: false },
  // { name: 'Donate', href: '/donate', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DombeloBar() {
  return (
    <>
      <div className="">
        <nav className="h-32 bg-red-700">
          <Image
            className="grid justify-items-start mb-6 "
            src="/logos/owino.png"
            alt="logo"
            width={250}
            height={250}
          />
          <div className="h-auto">
          <form action="">
            <div className="md:ml-auto md:mb-6">
              <p className="text-gray-800">
                <strong></strong>
              </p>
            </div>

            <div className="">
              <input
                type="text"
                className="
              form-control
              block
              
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-red-900
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none
            "
                id="exampleFormControlInput1"
                placeholder="Search for products"
              />
            </div>
          </form>
          </div>
        </nav>
        

        {/* Ad Section */}
        <Disclosure as="nav" className="bg-black">
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6"></div>
                </div>
              </div>
            </div>
          </>
        </Disclosure>
      </div>
    </>
  );
}
