import Head from "next/head";
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
import PicOne from "../public/items/88.png";
import PicTwo from "../public/items/KK.png";
import PicThree from "../public/items/imgthreeAd.png";

export default function Home({
  discounts,
  flash,
  newgoodies,
  trends,
  womens,
  categories,
  search,
  slider,
}) {
  return (
    <>
      <Head>
        <title>
          Owinoonline.com is an Online Shopping Portal That Mostly Deals In
          Second Hand Items
        </title>
        <meta name="Home" content="Home" />
        <meta
          name="description"
          content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items "
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* <meta name="robots" content="noindex" />  */}

        <meta
          name="keywords"
          content="Uganda Music, Download mp3 Uganda Music, Free Audios and Videos, Concert, New Ugandan music,old ugandan music, ugandan artists, ugandan musicians, strictly ugandan music , new ugandan videos, ugandan gossip news, celebrity interviews"
        />
        <meta
          name="description"
          content="New Latest Ugandan Mp3 Songs and free music downloads. Download free Ugandan music from artists in Afro Pop, Pop, R&amp;B, Hip Hop, Contemporary R&amp;B, and Rap music on UgaMusic, New Ugandan music,old ugandan music, ugandan artists, ugandan musicians, strictly ugandan music , new ugandan videos, ugandan gossip news, celebrity interviews - www.ugamusic.ug"
        />
        <link rel="canonical" href="https://www.owinoonline.com" />
        <meta name="keywords" content="" />
        <meta
          name="description"
          content=" Owinoonline.com is an Online Shopping Portal That Mostly Deals In
          Second Hand Items"
        />
        {/* <link rel="canonical" href="" /> */}

        <meta property="og:url" content="https://www.owinoonline.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items"
        />
        <meta
          property="og:description"
          content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items"
        />
        <meta property="og:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="JuJEgthIQTYcrGsIrOpjMEXyHvv4PjnQYk4syuIxldA"
        />

        <link rel="icon" href="/owinoonline.ico" />
      </Head>
     

{/* Coming soon start */}

<div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

  

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">We are preparing
something exciting
& amazing for you.</span>{' '}
               
              </h1>
              
              
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>


{/* Coming soon end */}






      {/* <Top />
      <Navbar search={search} />
      <HomeSlider slider={slider} />
      <Menu categories={categories} /> */}
      {/* Ad Space */}
      {/* <div className="mt-6 grid grid-cols-1 col-span-1 sm:mx-8  md:grid-cols-2 lg:grid-cols-3 ">
        <div className="">
          <div className="flex-shrink-0 mx-2 bg-gray-200 aspect-w-5 aspect-h-3">
            <Image
              src={PicThree}
              alt="Ad one"
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex-shrink-0 mx-2 bg-gray-200  aspect-w-5 aspect-h-3">
            <Image
              src={PicOne}
              alt="Ad one"
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex-shrink-0 mx-2 bg-gray-200  aspect-w-5 aspect-h-3">
            <Image
              src={PicTwo}
              alt="Ad one"
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10"
            />
          </div>
        </div>
      </div>
      <Flash flash={flash} />
      {/* Ad  */}

      {/* <New newgoodies={newgoodies} /> */} 
      {/* Ad */}
      {/* <div className="mt-6 mx-2 grid grid-cols-1 sm:mx-8 ">
        <div className="mt-10 flex-shrink-0 bg-gray-200 px-10 aspect-w-5 aspect-h-1">
          <div className="">
            <Image
              src={PicOne}
              alt="Ad one"
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10"
            />
          </div>
        </div>
      </div>
      <Trending trends={trends} /> */}
      {/* Ad */}
      {/* <div className="mt-10 grid grid-cols-1 sm:mx-8 md:grid-cols-2">
        <div className="">
          <div className="flex-shrink-0 mx-2 bg-gray-200 aspect-w-4 aspect-h-2">
            <Image
              src={PicTwo}
              alt="Ad one"
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex-shrink-0 mx-2 bg-gray-200  aspect-w-4 aspect-h-2">
            <Image
              src={PicThree}
              alt="Ad one"
              layout="fill"
              className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10"
            />
          </div>
        </div>
      </div> */}

      {/* <Women womens={womens} /> */}
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/products/discount/`
//   );
//   const discounts = await res.json();

//   const ress = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/products/flash/`
//   );
//   const flash = await ress.json();

//   const newgood = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/products/new/`
//   );
//   const newgoodies = await newgood.json();

//   const tr = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/products/trending/`
//   );
//   const trends = await tr.json();

//   const wn = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/women/`);
//   const womens = await wn.json();

//   const catres = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/products/women/`
//   );
//   const categories = await catres.json();

//   const sliderImg = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/products/home-slider/`
//   );
//   const slider = await sliderImg.json();

//   const all = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`
//   );
//   const search = await all.json();

//   return {
//     props: {
//       discounts,
//       flash,
//       newgoodies,
//       trends,
//       womens,
//       categories,
//       search,
//       slider,
//     },
//   };
// }
