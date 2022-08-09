import Image from "next";
import Link from "next/dist/client/link";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';
export default function Footer() {
  return (
    <>
  
  <footer className="footer-1 bg-gray-100 py-8 mt-5 sm:py-12">
  <div className="container mx-auto px-4">
    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 className="text-xl font-bold mb-6">Company</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About Us</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"></a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"></a>
          </li>
          {/* <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Others</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Groups</a>
          </li> */}
        </ul>
      </div>
      {/* <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 className="text-xl font-bold mb-6">Resources</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
          </li>
        </ul>
      </div> */}
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Owino Business</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Sell on owinoonline</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">FAQ</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"></a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"></a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Our Policies</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms of Use</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy Policy</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"></a>
          </li>
        </ul>
      </div>
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div className="flex sm:justify-center xl:justify-start">
          <a href={'https://www.facebook.com/OwinoOnlineofficial'} className="w-8 h-8  border-gray-400 rounded-full text-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
          
          <FacebookIcon size={32} round />
        
          </a>
          <a href={'https://twitter.com/owinoonline'} className="w-8 h-8  border-gray-400 rounded-full text-center  ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
          
        <TwitterIcon size={32} round />
     
          </a>
          <a href={'https://wa.me/+256771345613?'}className="w-8 h-8   border-gray-400 rounded-full text-center  ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
         
        <WhatsappIcon size={32} round />
      
          </a>
        </div>
      </div>
    </div>

  </div>
  
</footer>

<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-300">
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">OwinoOnline™</a>. All Rights Reserved.
</span>
<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
<li>
<a href="#" className="mr-4 hover:underline md:mr-6 "></a>
</li>
<li>
<a href="#" className="mr-4 hover:underline md:mr-6"></a>
</li>
<li>
<a href="#" className="mr-4 hover:underline md:mr-6"></a>
</li>
<li>
<a href="#" className="hover:underline"></a>
</li>
</ul>
</footer>

    </>
  );
}
