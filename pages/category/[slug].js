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
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Category({ categories }) {
  const groups = categories.products;
  console.log("Categories:", groups);

  

  const catImage = categories

  return (
    <>
      <Top />
      <Navbar />
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
        <SwiperSlide className="flex-shrink-0 relative w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image src={catImage.get_slider_image} height={330} width={1490} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image src={catImage.get_slider_image2} height={330} width={1490} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image src={catImage.get_slider_image3} height={330} width={1490} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image src={catImage.get_slider_image4} height={330} width={1490} alt="Image 1" />
        </SwiperSlide>
      </Swiper>
      
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-10 pb-6 flex flex-col items-center">
            <h2 className="text-4xl mb-3">{categories.name}</h2>
            <p className="text-gray-600 text-sm"></p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {groups.map((group) => (
              <Link key={group.id} href={`/product/${encodeURIComponent(group.get_absolute_url)}`}><a>
              <div
                key={group.id}
                className="group relative transform hover:translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
                  <Image
                    src={group.get_image}
                    alt={group.imageAlt}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    height={192}
                    width={200}
                  />
                </div>
                <div className="overflow-hidden font-semibold text-base text-center mt-6">
                  <div>
                    <h3 className=" ">
                      <a href={group.href} className=" ">
                        <span aria-hidden="true" className="" />
                        {group.name}
                      </a>
                    </h3>
                    <p className="mt-3 pl-8 text-xl  text-red-500 ">
                      UGX {group.price.toLocaleString()}
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
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("Context object:", context);

  const choice = context.params.slug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${choice}`);
  const categories = await res.json();

  console.log("Category Returned", categories);

  return {
    props: {
      categories,
    },
  };
}

