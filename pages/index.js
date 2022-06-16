import Head from 'next/head'
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
import Top from '../components/Top'

export default function Home({ discounts, flash, newgoodies, trends, womens,categories }) {
  // console.log("disocunts", discounts);
  // console.log("disocunts", flash);
  // const flashs = flash.products.slice(0,6)


  // console.log("disocunts", newgoodies);
  // console.log("disocunts", trends);
  // console.log("disocunts", womens);
  
  
  // if(!discounts) return <p></p>
  
  return (
    <>
    <Head>
      <title>Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items</title>
      <meta name="Home" content="Home"/>
      <link rel="icon" href="/owinoonline.ico" />
    </Head>
      <Top />
      <Navbar />
      <HomeSlider/>
      <Menu categories={categories}/>
      <Flash flash={flash}/>      
      <New newgoodies={newgoodies}/>
      <Trending  trends = {trends}/>
      <Women womens = {womens} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  
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

  const catres = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/women/`);
  const categories = await catres.json();

  return {
    props: {
      discounts,
      flash,
      newgoodies,
      trends,
      womens,
      categories,
    
      
    },
  };
}
