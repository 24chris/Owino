import Link from "next/link";
import Image from "next/image";
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Top from '../components/Top'
import Head from "next/head";


export default function Sucess() {
    
  return (
    <>
    <Head>
      <title>Success| Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items</title>
      <meta name="success" content="sucess"/>
    </Head>
    <Top/>
     <NavBar/>
        <h1>Your order has been sucessful</h1>
        
    </>
  );
}

