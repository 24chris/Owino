// import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import Flash from "../components/Flash";
import HomeSlider from "../components/HomeSlider";
import Navbar from "../components/Navbar";
import New from "../components/New";
import Trending from "../components/Trending";
import styles from "../styles/Home.module.css";
import Women from "../components/Women";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Menu from "../components/Menu";
import Top from "../components/Top";

export default function Home({ discounts, flash, newgoodies, trends, womens }) {
  console.log("disocunts", discounts);
  console.log("disocunts", flash);
  const flashs = flash.products.slice(0,6)


  console.log("disocunts", newgoodies);
  console.log("disocunts", trends);
  console.log("disocunts", womens);
  
  
  // if(!discounts) return <p></p>
  
  return (
    <>
      <Top />
      <Navbar />
      <HomeSlider/>
      <Menu/>
      {/* <Flash flash={flash}/> */}
      {/* Substituting component with block to test reactivity */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-0 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">Flash</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {flashs.map((flash) => (
              <Link key={flash.id} href={`product/${encodeURIComponent(flash.get_absolute_url)}`}>
              <a>
              <div
                
                className="group relative transform hover:translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
                  <Image
                    src={flash.get_image}
                    alt={flash.imageAlt}
                    height={192}
                    width={200}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                </div>
                <div className="overflow-hidden font-semibold text-base text-center mt-6">
                  <div>
                    <h3 className=" ">
                      
                        <span aria-hidden="true" className="" />
                        {flash.name}
                    
                    </h3>
                    <p className="mt-3 pl-8 text-xl  text-red-500 ">
                      UGX {flash.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 "></p>
                </div>
              </div>
              </a>
              </Link>
             ))}
          </div>
        </div>
      </div>
      
      <New newgoodies={newgoodies}/>
      <Trending  trends = {trends}/>
      <Women womens = {womens} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // console.log("Context object:", context);
  // const category_slug = context.params.category_slug
  // const product_slug = context.params.category_slug
  // const choice = context.params.slug

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/discount/`);
  const discounts = await res.json();

  const ress = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/flash/`);
  const flash = await ress.json();

  const newgood = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/new/`);
  const newgoodies = await newgood.json();

  const tr = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/trending/`);
  const trends = await tr.json();

  const wn = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/women/`);
  const womens = await wn.json();


  return {
    props: {
      discounts,
      flash,
      newgoodies,
      trends,
      womens,
      
    },
  };
}
