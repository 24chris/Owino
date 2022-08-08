
import Link from "next/link";
import Image from "next/image";
import NavBar from "../../../components/Navbar";
import Top from "../../../components/Top";
import HomeSlider from "../../../components/HomeSlider";
import Footer from "../../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Product({ products, search }) {
  

  const router = useRouter();

  const item = products.name;
  const price = products.price;

  function sendItems() {
    router.push({
      pathname: "/order",
      query: {
        item,
        price,
      },
    });
  }

  return (
    <>
      <Head>
        <title>
          {products.name} | Owinoonline.com is an Online Shopping Portal That
          Mostly Deals In Second Hand Items
        </title>
        <meta name="Products" content={products.description} />
        <meta
          name="description"
          content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items "
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Top />
      <NavBar search={search} />
      {/* <HomeSlider /> */}
      <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <Image
              src={products.get_image}
              alt={products.name}
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10 object-contain"
            />
          </div>

          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
            <h2 className="text-3xl font-semibold">{products.name}</h2>

            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500">Price:</p>
              <p className="text-xl font-semibold text-red-500">
                UGX {products.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500">Description:</p>
              <p className="text-xl font-semibold">{products.description}</p>

              <h2>
                Door delivery will depend on the distance to your location from
                Kampala
              </h2>

              <button
                type="button"
                onClick={(e) => sendItems()}
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Related Products</h2>
        <p className="text-gray-600 text-sm"></p>
      </div>
      <div className="p-24 flex flex-wrap items-center justify-center">
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              className="relative w-40"
              src={products.get_image}
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{products.name}</span>
              <span className="block bg-white rounded-full text-red-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              {products.price.toLocaleString()}/=
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
            <img
              className="relative w-40"
              src={products.get_image}
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{products.name}</span>
              <span className="block bg-white rounded-full text-red-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
               50,000/=
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
            <img
              className="relative w-40"
              src={products.get_image}
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{products.name}</span>
              <span className="block bg-white rounded-full text-red-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              {products.price.toLocaleString()}/=
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
            <img
              className="relative w-40"
              src={products.get_image}
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1"></span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{products.name}</span>
              <span className="block bg-white rounded-full text-red-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                {products.price.toLocaleString()}/=
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
export async function getServerSideProps(Context) {
  console.log(Context)
  
  const category_slug = Context.params.slug;

  const product_slug = Context.params.pslug;

  console.log("Category slug -->",category_slug)
  console.log("Product Slug -->",product_slug)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/${category_slug}/${product_slug}`
  );
  const products = await res.json();

  console.log("Products Returned", products);

  const all = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`
  );
  const search = await all.json();

  return {
    props: {
      products,
      search,
    },
  };
}

// export async function getStaticProps(context) {

//   const product_slug = context.params.slug

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${product_slug}`)
//   const products = await res.json()

//   console.log("products Returned", products)

//   return{
//     props:{
//       products
//     },
//     revalidate:6
//   }

// }

// export async function getStaticPaths(){

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`)
//   const items = await res.json()

//   const allslugs = items.map(item =>item.get_absolute_url)
//   const paths = allslugs.map(slug =>({params:{slug:slug}}))

//    console.log("paths returned for  items:" , paths)

//     return{
//       paths,
//       fallback:'blocking'
//     }
//   }
