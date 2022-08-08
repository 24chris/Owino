import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Top from '../../components/Top'
import Footer from "../../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from "next/head";
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Category({ categories,search }) {
  const groups = categories.products;
  console.log("Categories:", groups);

  

  const catImage = categories

  return (
    <>
    <Head>
      <title>{categories.name} | Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items</title>
      <meta name="category" content={categories.name}/>
      <meta name="description" content="Owinoonline.com is an Online Shopping Portal That Mostly Deals In Second Hand Items "/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="icon" href="/owinoline.ico" />
    </Head>
      <Top />
      <Navbar search={search}/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image src={catImage.get_slider_image} layout="fill" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image src={catImage.get_slider_image2} layout="fill"alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image src={catImage.get_slider_image3} layout="fill" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full h-full  bg-gray-200 aspect-w-5 aspect-h-1">
          <Image src={catImage.get_slider_image4} layout="fill" alt="Image 1" />
        </SwiperSlide>
      </Swiper>
      
      <div className="bg-white">
        <div className="mx-auto py-0 px-4 sm:py-0 sm:px-6">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">{categories.name}</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4">
            {groups.map((group) => (
              <Link
              key={group.id}
              href={`/product${encodeURI(group.get_absolute_url)}`}
              as={`/product${encodeURI(group.get_absolute_url)}`}
              // href={`prod/${(flash.get_absolute_url)}`}
              // as={`prod/${(flash.get_absolute_url)}`}
            >
              <a>
                <div className="pt-0 pr-0 pb-1 pl-0">
                  <div className="relative border-solid border-grey border-2 rounded-md p-2">
                    <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-1 sm:aspect-h-1">
                    <Image
                      src={group.get_image}
                      alt={group.imageAlt}
                      layout="fill"
                      // width={219}
                      // height={187}
                      className="absolute top-0 left-0 bottom-0 right-0 max-w-full max-h-full z-10 object-contain"
                    />
                    </div>
                  <div className="h-20 mt-2 mx-0 mb-0 text-center whitespace-normal">
                    <div className="text-sm h-10 mt-0 mx-0 mb-3 font-normal overflow-hidden">
                        {group.name}
                    </div>
                    <p className="text-red-500 text-base font-bold m-0">
                        UGX {group.price.toLocaleString()}
                      </p>
                  </div>
                  </div>
                </div>
              </a>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("Context object:", context);

  const choice = context.params.slug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${choice}`);
  const categories = await res.json();

  console.log("Category Returned", categories);

  const all = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/latest-products/`);
  const search = await all.json();

  return {
    props: {
      categories,
      search
    },
  };
}

