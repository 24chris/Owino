import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import HomeSlider from '../components/HomeSlider'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

export default function Shoes(){
    return(
        <>
        <Navbar/>
        <HomeSlider/>
        <ProductList/>
        <Footer/>
        </>
    )
}