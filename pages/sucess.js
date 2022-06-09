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
      <title>Success</title>
      <meta name="success" content="sucess"/>
    </Head>
    <Top/>
     <NavBar/>
        <h1>Your order has been sucessful</h1>
    </>
  );
}

