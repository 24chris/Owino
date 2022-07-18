import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useSearchParams } from "react-dom";
import { useState,useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import SearchList from "../components/SearchList";

export default function SearchTest() {

    const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);
  
  return (
    <>
      <Head>
        <title>
          Owinoonline.com is an Online Shopping Portal That Mostly Deals In
          Second Hand Items
        </title>
        <meta name="search" content="search" />
      </Head>
      <Navbar/>
      <SearchList moviess={movies}/>
      
    </>
  );
}
