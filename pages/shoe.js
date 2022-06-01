import Navbar from "../components/Navbar";

// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
import { toast } from "react-hot-toast";
// import { useShoppingCart } from '@/hooks/use-shopping-cart';
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
// import { formatCurrency } from '@/lib/utils';
// import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

// import products from 'products';
import Router from "next/router";

export default function shoes() {
  const handleClick = async e=>{
    e.preventDefault()
    await Router.push("https://flutterwave.com/pay/zqzdzayzwlx2")
  }
  return (
    <>
      <Navbar />
      {/* // <title>{props.name} | AlterClass</title> */}
      <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <Image
              src="/items/shirt.jpg"
              alt="long sleeved shirt"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
            <h2 className="text-3xl font-semibold">Shirt</h2>
            {/* <p>
              <span className="text-gray-500">Availability:</span>{' '}
              <span className="font-semibold">In stock</span>
            </p> */}

            {/* Price */}
            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500">Price:</p>
              <p className="text-xl font-semibold">50,000 /= Ugx</p>
            </div>

            <div className="mt-4 border-t pt-4">
              {/* Quantity */}
              <p className="text-gray-500">Description:</p>
              <p className="text-xl font-semibold">
                A very brief description of the long sleeved shirt
              </p>
              {/* <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                >
                  <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                >
                  <PlusSmIcon className="w-6 h-6 flex-shrink-0 " />
                </button>
              </div> */}
            
              {/* Add to cart button */}
              <h2>Door delivery around Kampala is 5000/=</h2>
              <button
                type="button"
                onClick={(e)=>handleClick(e,"https://flutterwave.com/pay/zqzdzayzwlx2")}
                
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Guula kati / Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Related Products</h2>
        <p className="text-gray-600 text-sm"></p>
      </div>
      <div className="p-24 flex flex-wrap items-center justify-center">
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Peace Lily</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
            <img
              className="relative w-40"
              src="/items/shoe.jpg"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Monstera</span>
              <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
               50,000/=
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
