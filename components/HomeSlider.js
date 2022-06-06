// import React,{useRef,useState} from "React"
import {Swiper,SwiperSlide} from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Image import 
import Image from 'next/image'
import PicOne from '../public/items/imgthree.jpg'
import PicTwo from '../public/items/imgtwo.jpg'
import PicThree from '../public/items/imgone.jpg'
import PicFour from '../public/items/slider4.jpg'
import PicFive from '../public/items/slider5.jpg'



export default function HomeSlider(){

  

    return(
        <>
        <div className="relative">
          <div className="mx-auto overflow-hidden p-0 z-10">
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
        <SwiperSlide className="flex-shrink-0 relative w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image 
          src={PicOne} 
          height={330}
           width={1490} 
           alt="Image 1"
           />
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image 
          src={PicTwo}
          height={330}
          width={1490}
          alt="Image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image 
          src={PicFour} 
          height={330}
           width={1490} 
           alt="Image 1"
           />
        </SwiperSlide>
        
        <SwiperSlide className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image 
          src={PicFive}
          height={330}
          width={1490}
          alt="Image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md lg:h-40 lg:aspect-none">
          <Image
           src={PicThree} 
           height={330} 
           width={1490} 
           alt="Image 3"
           className="object-fit h-330 w-full object-cover md:h-full md:w-1490"
           />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
          </div>
        </div>
         
        </>
    )
}