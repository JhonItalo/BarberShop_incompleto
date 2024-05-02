"use client"

import IndicadosItem from '@/app/(private)/(home)/_components/indicadosItem.tsx/indicadosItem'
import { Barbershop } from '@prisma/client'
import React, { useRef, ElementRef, useState, useEffect } from 'react'


interface SlideIndicadosItemsProps {
  children: React.ReactNode
  className: string;
  buttonPosition: string
  size?: string
}

export default function SlideGeneric({ children, className, buttonPosition, size }: SlideIndicadosItemsProps) {
  const slideRef = useRef<ElementRef<"div">>(null);

  const [activePreviousButton, setActivePreviousButton] = useState<boolean>(false);
  const [scrollLeft, setScrollLeft] = useState<boolean>(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (slideRef.current) {
        console.log(slideRef.current.scrollLeft, "scrol")
        if (slideRef.current.scrollLeft === 0) {
          setActivePreviousButton(false)
        }
      }
      return () => {
        clearTimeout(timeoutId);
      };
    }, 500);


  }, [scrollLeft]);

  const handleClickNextSlide = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += slideRef.current.offsetWidth * 0.75
    }
    setActivePreviousButton(true)
  }

  const handleClickPreviousSlide = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft -= slideRef.current.offsetWidth * 0.75
      setScrollLeft((prev) => !prev)

    }
  }

  return (
    <>
      <div className={` relative ${size ? size : "w-full"}`}>

        <button onClick={handleClickNextSlide}
          style={{ right: buttonPosition }}
          className={`w-[55px] h-[55px] flex justify-center items-center rounded-full absolute top-1/2 right-[-6%] border-2 border-[#26272B]
                translate-y-[-50%]
                 z-10  bg-[#141518]
                 xl:w-[45px] xl:h-[45px]
                 `}>

          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.00011L12.5 12.0001L1.5 23.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>

        <button onClick={handleClickPreviousSlide}
          style={{ left: buttonPosition }}
          className={`w-[55px] h-[55px] flex justify-center items-center rounded-full absolute top-1/2  border-2 rotate-180 border-[#26272B] translate-y-[-50%]
					${activePreviousButton ? "" : "hidden"}
                 z-10  bg-[#141518]
                 xl:w-[45px] xl:h-[45px]
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


    </>
  )
}
