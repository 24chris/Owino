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
import PicTwo from "../public/items/KK.png"
import PicThree from "../public/items/imgthree.png"

export default function Home({
  discounts,
  flash,
  newgoodies,
  trends,
  womens,
  categories,
  search,
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

        <meta name="keywords" content="Uganda Music, Download mp3 Uganda Music, Free Audios and Videos, Concert, New Ugandan music,old ugandan music, ugandan artists, ugandan musicians, strictly ugandan music , new ugandan videos, ugandan gossip news, celebrity interviews"/>
<meta name="description" content="New Latest Ugandan Mp3 Songs and free music downloads. Download free Ugandan music from artists in Afro Pop, Pop, R&amp;B, Hip Hop, Contemporary R&amp;B, and Rap music on UgaMusic, New Ugandan music,old ugandan music, ugandan artists, ugandan musicians, strictly ugandan music , new ugandan videos, ugandan gossip news, celebrity interviews - www.ugamusic.ug"/>
<link rel="canonical" href="https://www.owinoonline.com"/>
<meta name="keywords" content=""/>
<meta name="description" content=" Owinoonline.com is an Online Shopping Portal That Mostly Deals In
          Second Hand Items"/>
{/* <link rel="canonical" href="" /> */}

 <meta property="og:url"           content="https://www.owinoonline.com" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items" />
  <meta property="og:description"   content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items" />
  <meta property="og:image"         content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="google-site-verification" content="1knQBl2L-EqffbSiI9kkBaZtVJFENo-_49oAC2okMHk" />
  
        <meta
          name="google-site-verification"
          content="1knQBl2L-EqffbSiI9kkBaZtVJFENo-_49oAC2okMHk"
        />
        <link rel="icon" href="/owinoonline.ico" />
      </Head>
      <Top />
      <Navbar search={search} />
      <HomeSlider />
      <Menu categories={categories} />
      {/* Ad Space */}
      <div className="mt-6 grid grid-cols-1 col-span-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <div className="flex-shrink-0 mx-2 bg-gray-200 aspect-w-5 aspect-h-3">
            <Image src={PicThree} alt="Ad one" layout="fill" className="object-cover" />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex-shrink-0 mx-2 bg-gray-200  aspect-w-5 aspect-h-3">
            <Image src={PicOne} alt="Ad one" layout="fill" className="object-cover" />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex-shrink-0 mx-2 bg-gray-200  aspect-w-5 aspect-h-3">
            <Image src={PicTwo} alt="Ad one" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>
      <Flash flash={flash} />
      {/* Ad Space */}

      <New newgoodies={newgoodies} />
      {/* Ad space */}
      <div className="flex-shrink-0 mx-4 bg-gray-200 px-10 aspect-w-5 aspect-h-1">
        <div className="">
          <Image
            src={PicOne}
            alt="Ad one"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <Trending trends={trends} />
      {/* Ad Space */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="flex-shrink-0 mx-2 bg-gray-200 aspect-w-4 aspect-h-2">
            <Image src={PicTwo} alt="Ad one" layout="fill" className="object-cover" />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex-shrink-0 mx-2 bg-gray-200  aspect-w-4 aspect-h-2">
            <Image src={PicThree} alt="Ad one" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>

      <Women womens={womens} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/discount/`
  );
  const discounts = await res.json();

  const ress = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/flash/`
  );
  const flash = await ress.json();

  const newgood = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/new/`
  );
  const newgoodies = await newgood.json();

  const tr = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/trending/`
  );
  const trends = await tr.json();

  const wn = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/women/`);
  const womens = await wn.json();

  const catres = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/women/`
  );
  const categories = await catres.json();

  const all = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`
  );
  const search = await all.json();

  return {
    props: {
      discounts,
      flash,
      newgoodies,
      trends,
      womens,
      categories,
      search,
    },
  };
}
