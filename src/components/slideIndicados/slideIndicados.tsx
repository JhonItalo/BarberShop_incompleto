"use client"

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';;

import { Barbershop } from '@prisma/client';
import IndicadosItem from '@/app/(private)/(home)/_components/indicadosItem.tsx/indicadosItem';
import { SwiperNavButtons } from "../swiperNavButtons/SwiperNavButtons";
import { useRef } from 'react';


interface SlideIndicadosItemsProps {
  barbershops: Barbershop[]

}

export default function SlideIndicados({ barbershops }: SlideIndicadosItemsProps) {
  const slideRef = useRef<SwiperRef>(null);


  return (

    <Swiper
      className='mt-4'
      slidesPerGroup={2}
      speed={700}
      breakpoints={{
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }}
      initialSlide={0}
      allowTouchMove={false}
      grabCursor={false}
      ref={slideRef}
    >
      {
        barbershops.map((item) => (
          <SwiperSlide key={item.id}>
            <IndicadosItem key={item.id} barbershop={item} />
          </SwiperSlide>
        ))
      }

      <SwiperNavButtons refi={slideRef} />

    </ Swiper>



  )
}


/*
 <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: false }}

    >
      {barbershops.map((item) => (
        <SwiperSlide key={item.id}>
          <IndicadosItem key={item.id} barbershop={item} />
        </SwiperSlide>
      ))}

    </Swiper>
*/

/*

 <div className={` relative ${size ? size : "w-full"}`}>

        <button onClick={handleClickNextSlide}
          style={{ right: buttonPosition }}
          className={`w-[40px] h-[40px] flex justify-center items-center rounded-full absolute top-1/2 right-[-6%] border-2 border-[#26272B]
                translate-y-[-50%]
                 z-10  bg-[#141518]
                 xl:w-[45px] xl:h-[45px]
                 1xl:w-[55px] 1xl:h-[55px]
                 `}>

          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.00011L12.5 12.0001L1.5 23.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>

        <button onClick={handleClickPreviousSlide}
          style={{ left: buttonPosition }}
          className={`w-[40px] h-[40px] flex justify-center items-center rounded-full absolute top-1/2  border-2 rotate-180 border-[#26272B] translate-y-[-50%]
          ${activePreviousButton ? "" : "hidden"}
          z-10  bg-[#141518]
          xl:w-[45px] xl:h-[45px]
          1xl:w-[55px] 1xl:h-[55px]
                 `}>
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.00011L12.5 12.0001L1.5 23.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>


        <div
          ref={slideRef}
          className={className}
        >
          {children}
        </div>
      </div>


*/