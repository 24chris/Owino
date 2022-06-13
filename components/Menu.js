import Image from "next/image";
import Link from "next/link";
import {Swiper,SwiperSlide} from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Menu() {
  return (
    <div className="bg-white py-12 border-gray-200 px-2 sm:px-4 rounded">
      <div className="container mx-auto">
        <div className="pb-6 flex flex-col">
          <h2 className="text-4xl flex flex-grow-0 flex-shrink-0 flex-basis-100 max-w-full">
            All Categories
          </h2>
          <p className="text-gray-600 text-sm"></p>
        </div>

        <div className="relative py-3 px-0" >
       
          <div className="mx-auto w-full px-12 xl:px-12">
            <div className="flex flex-wrap -mx-4">
              <div className="flex flex-grow-0 flex-shrink-0 flex-basis max-w-full">
                <div className="relative mx-auto overflow-hidden z-10">
                  <div className="relative flex w-full h-full">
                    
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/women')}`} as={'category/women'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/women.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Women&apos;s Shop
                            </div>
                          </div>
                        </a>
                      </Link>
                     
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/men')}`} as={'category/men'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/men.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Men&apos;s Shop
                            </div>
                          </div>
                        </a>
                      </Link>
                      
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/kids')}`} as={'category/kids'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/kids.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Kids Corner
                            </div>
                          </div>
                        </a>
                      </Link>
                     
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/electronics-tools')}`} as={'category/electronics-tools'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/electronics.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Electronics & Tools
                            </div>
                          </div>
                        </a>
                      </Link>
                     
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/sports-entertainment')}`} as={'category/sports-entertainment'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/sports-equipment.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Sports & Entertainment
                            </div>
                          </div>
                        </a>
                      </Link>
                      
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/beauty-health')}`} as={'category/beauty-health'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/beauty.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Beauty & Health
                            </div>
                          </div>
                        </a>
                      </Link>
                     
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/home-supplies')}`} as={'category/home-supplies'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/home.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Home Supplies
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/baby')}`} as={'category/baby'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/baby.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Baby Products
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/supermarket')}`} as={'category/supermarket'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/supermarket.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Supermarket
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div className="relative  h-full flex-shrink-0 w-28 mr-7">
                      <Link href={`${encodeURIComponent('category/watches-glasses')}`} as={'category/watches-glasses'}>
                        <a>
                          <div className="relative p-3">
                            <Image
                              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full bg-white rounded-full h-48 w-full object-cover md:h-full md:w-48"
                              src="/items/watch-sunglasses.jpg"
                              height={150}
                              width={150}
                              alt="bag"
                            ></Image>
                          </div>
                          <div className="mt-1 whitespace-normal">
                            <div className="font-13 text-black line-height text-center">
                              Watches and Sunglasses
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// <div className="bg-blue-300 py-12 border-gray-200 px-2 sm:px-4 rounded">
// <div className="conatiner mx-auto w-full">
//   <div className="flex flex-wrap -mx-4 box-border">
//     <div className="flex-grow-0 flex-shrink-0 basis-full mb-4 max-w-full">
//       <div className="flex box-border items-center justify-center">
//       <div className="box-border text-3xl">
//         All Categories
//       </div>
//       </div>
//     </div>
//     <div className="flex-grow-0 flex-shrink-0 basis-full max-w-full">
//       <div className="mx-auto relative p-0 overflow-x-hidden overflow-y-hidden">
//         <div className="flex relative w-full h-full box-border">
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/shoe.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Electronics
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/golfbag.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Kids
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/golfbag.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Bags
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/golfbag.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Electronics
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/golfbag.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Sports 
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/golfbag.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Women
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//           <div className="flex-shrink-0 h-full relative">
//             <Link href="#">
//             <a>
//                <div className="box-border relative pt-12/12">
//                  <Image
//                  className="w-full h-auto border-none absolute top-0 bottom-0 right-0 left-0 max-w-full max-h-full bg-white rounded-full"
//                  src="/items/golfbag.jpg"
//                  height={150}
//                  width={150}
//                  alt="bag"
//                  ></Image>
//                </div>
//                <div className="box-border mt-4 whitespace-normal">
//                  <div className="text-black text-center font-13 line-height">
//                    Men
//                  </div>
//                </div>
//             </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div> 
