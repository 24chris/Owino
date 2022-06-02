// // import Head from 'next/head'
// import Image from 'next/image'
// // import Flash from '../components/Flash'
// // import HomeSlider from '../components/HomeSlider'
// // import NavBar from '../components/Navbar'
// // import New from '../components/New'
// // import Trending from '../components/Trending'
// // import styles from '../styles/Home.module.css'
// // import Women from '../components/Women'
// // import Children from '../components/Children'
// // import Footer from '../components/Footer'
// // import NewsLetter from '../components/NewsLetter'
// // import Menu from '../components/Menu'

// export default function Bags({products}) {
//     console.log('products:',products)
//   return (
//     <>
//     {/* <NavBar/>
//     <HomeSlider/> */}
//     {/* // <title>{props.name} | AlterClass</title> */}
//         {/* <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
//             <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
//               {/* Product's image */}
//               {/* <div className="relative w-72 h-72 sm:w-96 sm:h-96">
//                 <Image
//                   src={products.get_image}
//                   alt="long sleeved shirt"
//                   layout="fill"
//                   objectFit="contain"
//                   height={487}
//                   width={522}
//                 />
//               </div>  */}

//           {/* Product's details */}
//           {/* <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
//             <h2 className="text-3xl font-semibold">{products.name}</h2>
//             <div className="mt-8 border-t pt-4">
//               <p className="text-gray-500">Price:</p>
//               <p className="text-xl font-semibold">{products.price}</p>
//             </div>

//             <div className="mt-4 border-t pt-4">
//               {/* Quantity */}
//               <p className="text-gray-500">Description:</p>
//               <p className="text-xl font-semibold">
//                {products.description}
//               </p> 
//               {/* Add to cart button */}
//               {/* <h2>Door delivery around Kampala is 5000/=</h2>
//               <button
//                 type="button"
//                 onClick=""
//                 disabled=""
//                 className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="pt-10 pb-6 flex flex-col items-center">
//         <h2 className="text-4xl mb-3">Related Products</h2>
//         <p className="text-gray-600 text-sm"></p>
//       </div>
//       <div className="p-24 flex flex-wrap items-center justify-center">
//         <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
//           <div className="relative pt-10 px-10 flex items-center justify-center">
//             <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
//             <img
//               className="relative w-40"
//               src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
//               alt=""
//             />
//           </div>
//           <div className="relative text-white px-6 pb-6 mt-6">
//             <span className="block opacity-75 -mb-1">Indoor</span>
//             <div className="flex justify-between">
//               <span className="block font-semibold text-xl">Peace Lily</span>
//               <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
//                 $36.00
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
//           <div className="relative pt-10 px-10 flex items-center justify-center">
//             <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
//             <img
//               className="relative w-40"
//               src="/items/shoe.jpg"
//               alt=""
//             />
//           </div>
//           <div className="relative text-white px-6 pb-6 mt-6">
//             <span className="block opacity-75 -mb-1">Outdoor</span>
//             <div className="flex justify-between">
//               <span className="block font-semibold text-xl">Monstera</span>
//               <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
//                50,000/=
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
//           <div className="relative pt-10 px-10 flex items-center justify-center">
//             <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2"></div>
//             <img
//               className="relative w-40"
//               src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
//               alt=""
//             />
//           </div>
//           <div className="relative text-white px-6 pb-6 mt-6">
//             <span className="block opacity-75 -mb-1">Outdoor</span>
//             <div className="flex justify-between">
//               <span className="block font-semibold text-xl">Oak Tree</span>
//               <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
//                 $68.50
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//     <Footer/> */}
//     </>
//   )
// }



//   export async function getStaticPaths() {
//     const category_slug = this.$route.params.category_slug
//     const product_slug = this.$route.params.product_slug

//     const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/`)
//     const products = await res.json()

//     const allSlugs = data.map(item=> item.slug)
//     const paths = allSlugs.map(slug =>({params:{slug:slug}}))
//     return {
//       paths,
//     //    [
//     //     { params: { ... } }
//     //   ],
//       fallback: true // false or 'blocking'
//     };
//   }

//   export async function getStaticProps({params}) {
//     const category_slug = this.$route.params.category_slug
//     const product_slug = this.$route.params.product_slug

//     const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/`)
//     const products = await res.json()
  
//     return {
//       props: {
//         products,
//       },
//     }
//   }


  

// // export async function getServerSideProps() {
// //   const category_slug = this.$route.params.category_slug
// //   const product_slug = this.$route.params.product_slug


// //   const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/`)
// //   const products = await res.json()

// //   return {
// //     props: {
// //       products,
// //     },
// //   }
// // }

// // This function gets called at build time
// // export async function getStaticPaths() {
// //   // Call an external API endpoint to get posts
// //   const res = await fetch(`http://127.0.0.1:8000/api/v1/latest-products/${product_slug}`)
// //   const products = await res.json()

// //   // Get the paths we want to pre-render based on posts
// //   const paths = products.map((product) => ({
// //     params: { id: product.id },
// //   }))

// //   // We'll pre-render only these paths at build time.
// //   // { fallback: false } means other routes should 404.
// //   return { paths, fallback: false }
// // }

// // // This also gets called at build time
// // export async function getStaticProps({ product_slug }) {
// //   // params contains the post `id`.
// //   // If the route is like /posts/1, then params.id is 1
// //   const res = await fetch(`http://127.0.0.1:8000/api/v1/latest-products/${product_slug}`)
// //   const product = await res.json()

// //   // Pass post data to the page via props
// //   return { props: { product } }
// // }


// // This function gets called at build time
// // export async function getStaticPaths() {
// //   // Call an external API endpoint to get posts
// //   // const res = await fetch(`http://127.0.0.1:8000/api/v1/latest-products/${product_slug}`)
// //   // const products = await res.json()

// //   // Get the paths we want to pre-render based on posts
// //   // const paths = products.map((product) => ({
// //   //   params: { id: product.id },
// //   // }))

// //   // We'll pre-render only these paths at build time.
// //   // { fallback: false } means other routes should 404.
// //   return {
// //      paths:[
// //        {
// //          params :{get_absolute_url:'/Kids Items/mats/'}
// //         }
// //       ], 
// //      fallback: false }
// // }

// // This also gets called at build time
// // export async function getStaticProps({ params }) {
// //   // params contains the post `id`.
// //   // If the route is like /posts/1, then params.id is 1
// //   const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${params.get_absolute_url}`)
// //   const product = await res.json()

// //   // Pass post data to the page via props
// //   return { props: { product } }
// // }


// import Link from "next/link";
// import Image from "next/image";
// import NavBar from '../components/Navbar'
// import Footer from '../components/Footer'
// import HomeSlider from '../components/HomeSlider'

// export default function Category({products}) {
//     console.log('products:',products)
//   return (
//     <>
//      <NavBar/>
//     <HomeSlider/>
//      <h1> Category Sections</h1>
     
//      {/* <h1>{products.name}</h1>
//      <h2>{products.price}</h2> */}
//     </>
//   );
// }



// // export async function getStaticPaths() {
// //     const category_slug = this.$route.params.category_slug
// //     const product_slug = this.$route.params.product_slug

// //     const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/`)
// //     const products = await res.json()

// //     const allSlugs = data.map(item=> item.slug)
// //     const paths = allSlugs.map(slug =>({params:{slug:slug}}))
// //     return {
// //       paths,
// //     //    [
// //     //     { params: { ... } }
// //     //   ],
// //       fallback: true // false or 'blocking'
// //     };
// //   }

//   export async function getStaticProps({params}) {
//     // const category_slug = this.$route.params.category_slug
//     // const product_slug = this.$route.params.product_slug

//     // const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/`)
//     // const products = await res.json()

//     const res = await fetch('http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/')
//     const products = await res.json()
//     console.log(products)
  
//     return {
//       props: {
//         products,
//       },
//     }
//   }


import Link from "next/link";
import Image from "next/image";
import NavBar from '../../components/Navbar'
import Top from '../../components/Top'
import HomeSlider from '../../components/HomeSlider'
import Footer from "../../components/Footer";
import { useState } from "react";
import {useRouter} from 'next/router'

export default function Product({products}) {
    console.log('Products from slug page:',products)

    const refreshData = () => {
      router.replace(router.asPath);
    }

    useEffect(() => {
      refreshData()
   }, [])


      const item = products.name
      const price = products.price
      


      function sendItems(){
        Router.push({
          pathname:"/order",
          query:{
            item,
            price,
            
          }
        })
      }


     
    
  return (
    <>
     <Top />
      <NavBar />
      <HomeSlider/>
      {/* // <title>{props.name} | AlterClass</title> */}
      <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <img
              src={products.get_image}
              alt="long sleeved shirt"
              layout="fill"
              // objectFit="contain"
            />
          </div>
          

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
            <h2 className="text-3xl font-semibold">{products.name}</h2>
            {/* <p>
              <span className="text-gray-500">Availability:</span>{' '}
              <span className="font-semibold">In stock</span>
            </p> */}

            {/* Price */}
            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500">Price:</p>
              <p className="text-xl font-semibold text-red-500">UGX {products.price.toLocaleString()}</p>
            </div>

            <div className="mt-4 border-t pt-4">
              {/* Quantity */}
              <p className="text-gray-500">Description:</p>
              <p className="text-xl font-semibold">
                {products.description}
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
                onClick={(e)=>sendItems()}
                
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm order
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



export async function getServerSideProps(context) {

  console.log("Context object:", context)
  // const category_slug = context.params.category_slug
  // const product_slug = context.params.category_slug
  const choice = context.params.slug

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${choice}`)
  const products = await res.json()

  console.log("product Returned", products)
  

  return{
    props:{
      products
    },
    revalidate:1
  }
    
}

export async function getStaticPaths(){
  
//   // const res = await fetch(`http://127.0.0.1:8000/api/v1/latest-products/`)
//   // // const res = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}`)
//   // const items = await res.json()

//   // const allpaths = items.map(item =>{
//   //   return{
//   //     params:{
//   //       slug:allpaths.slug
//   //     }
//   //   }
//   // })
//   // return {
//   //   paths,
//   //   fallback:false
//   // }


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`)
  const items = await res.json()

  const paths = items.map(item =>({
    params:
    {
      // category:item.get_absolute_url,
      slug:item.get_absolute_url
    }
  }))

    // Version one
  // return{
  //   paths:items.map(item =>{
  //     return{
  //       params:{
  //         slug:item.get_absolute_url
  //       }
  //     }
  //   }),
  //   fallback:false

   console.log("paths returned for  items:" , paths)
   
    return{
      paths:[],
      fallback:true
    }
  }







  //default working
  // return{
  //   paths:[{params:{slug:"women/blouse/"}}],
  //   fallback:true
  // }

