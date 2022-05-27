import Link from "next/link";
import Image from "next/image";
import PicOne from "../public/items/shoe.jpg";
import SectionOne from "./SectionOne";

const products = [
  {
    id: 1,
    name: "Basic Tee with minted and caramel",
    href: "#",
    imageSrc: "/items/shirt.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35,000/=",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee with minted and caramel",
    href: "#",
    imageSrc: "/items/shirt.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35,000/=",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee with minted and caramel",
    href: "#",
    imageSrc: "/items/shirt.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35,000/=",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee with minted and caramel",
    href: "#",
    imageSrc: "/items/shirt.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35,000/=",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee with minted and caramel",
    href: "#",
    imageSrc: "/items/shirt.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35,000/=",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee with minted and caramel",
    href: "#",
    imageSrc: "/items/shirt.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35,000/=",
    color: "Black",
  },
  // More products...
];

export default function productList() {
  return (
    // <main className="my-8">
    //     <div className="container mx-auto px-6">
    //         <h3 className="text-gray-700 text-2xl font-medium">Shoes</h3>
    //         <span className="mt-3 text-sm text-gray-500"></span>
    //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
    //             {products.map((product)=>(
    //             <div key={product.id} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    //                 <div className="flex items-end justify-end h-56 w-full bg-cover">
    //                     <img className="flex items-end justify-end h-56 w-full bg-cover" src={product.imageSrc}  alt={product.imageAlt}></img>
    //                 </div>
    //                 <div className="px-5 py-3">
    //                     <Link href="/shoe" className="text-gray-700 uppercase">{product.name}</Link>
    //                     <span className="text-gray-500 mt-2">{product.price}</span>
    //                 </div>
    //             </div>
    //             ))}
    //         </div>
    //     </div>
    // </main>
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">Shoes</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative transform hover:translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="overflow-hidden font-semibold text-base text-center mt-6">
                  <div>
                    <h3 className=" ">
                      <a href={product.href} className=" ">
                        <span aria-hidden="true" className="" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-3 pl-8 text-xl  text-red-500 ">
                      {product.price}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 "></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">Related Items</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          {/* <div className="p-24 flex flex-wrap items-center justify-center">
          {products.map((product) => (
            <a href="#" key={product.id}>
              <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                  <img
                    className="relative w-40"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                  />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">
                    {product.name}
                    </span>
                    <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                    {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </a>
            ))}
          </div> */}
          <div className="p-24 flex flex-wrap items-center justify-center">
            <a href="#">
              <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
                
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                  <img
                    className="relative w-40"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">
                      Shirts
                    </span>
                    <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                     35000/= Ugx
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-2 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">New Items</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="p-24 flex flex-wrap items-center justify-center">
            <a href="#">
              <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
                <svg
                  className="absolute bottom-0 left-0 mb-8 transform: scale(1.5); opacity: 0.1;"
                  viewBox="0 0 375 283"
                  fill="none"
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                  <img
                    className="relative w-40"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">
                      Plants
                    </span>
                    <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      40,000/= Ugx
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
