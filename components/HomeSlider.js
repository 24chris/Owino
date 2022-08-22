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
import PicOne from '../public/items/88.png'
import PicTwo from '../public/items/KK.png'
import PicThree from '../public/items/MM.png'
import PicFour from '../public/items/online4.png'
import PicFive from '../public/items/online5.png'



export default function HomeSlider({slider}){

console.log("Slider Images",slider)
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
        {/* {slider.map((slide) => (
            <SwiperSlide key={slide.id} className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
            <Image 
            src={slide.get_image} 
            layout="fill"
             alt="Shopping"
             className="object-cover"
             />
           </SwiperSlide>
        ))} */}
        
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image 
          src={slider.get_slider_image}
          className="object-cover"
          layout="fill"
          alt="Image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image 
          src={slider.get_slider_image2} 
          className="object-cover"
          layout="fill" 
           alt="Image 1"
           />
        </SwiperSlide>
        
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image 
          src={slider.get_slider_image3}
          className="object-cover"
          layout="fill"
          alt="Image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="flex-shrink-0 relative w-full h-full bg-gray-200 aspect-w-5 aspect-h-1">
          <Image
           src={slider.get_slider_image4} 
           className="object-cover"
          layout="fill"
           alt="Image 3"
  
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