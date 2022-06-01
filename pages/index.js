// import Head from 'next/head'
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
  console.log("disocunts", newgoodies);
  console.log("disocunts", trends);
  console.log("disocunts", womens);
  
  if(!discounts) return <p></p>
  
  return (
    <>
      <Top />
      <Navbar />
      <HomeSlider/>
      <Menu/>
      <Flash flash={flash}/>
      <New newgoodies={newgoodies}/>
      <Trending  trends = {trends}/>
      <Women womens = {womens} />
      <NewsLetter />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  console.log("Context object:", context);
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


// export async function getServerSideProps() {
//   const res = await fetch('http://127.0.0.1:8000/api/v1/latest-products/')
//   const products = await res.json()

//   return {
//     props: {
//       products,
//     },
//   }
// }

