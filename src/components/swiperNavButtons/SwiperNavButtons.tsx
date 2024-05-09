import { Sliders } from 'lucide-react';
import React, { ElementRef, useEffect, useRef, useState } from 'react';
import { useSwiper } from 'swiper/react';

interface props {
    refi: any
}

export const SwiperNavButtons = ({ refi }: props) => {
    console.log("rerender")

    const [activePreviousButton, setActivePreviousButton] = useState<boolean>(false);
    const [activeNextButton, setActiveNextButton] = useState<boolean>(true);
    const [scrollListen, setScrollListen] = useState<boolean>(false);
    const swiper = useSwiper();


    useEffect(() => {
        if (refi.current) {
            if (refi.current?.swiper.isBeginning) {
                setActivePreviousButton(false)
            }
            if (refi.current?.swiper.isBeginning === false && activePreviousButton === false) {
                setActivePreviousButton(true)
            }
            if (refi.current?.swiper.isEnd) {
              
                setActiveNextButton(false)
            }

            if (refi.current?.swiper.isEnd === false && activeNextButton === false) {
           
                setActiveNextButton(true)
            }

        }


    }, [scrollListen, refi]);



    const handleNextClick = () => {
        setScrollListen(!scrollListen)
        swiper.slideNext()
    }

    const handlePrevClick = () => {
        setScrollListen(!scrollListen)
        swiper.slidePrev()
    }


    return (
        <div className="w-full h-full absolute top-0 left-0 ">
            <div className='w-full h-full relative'>
                <button className={`${activePreviousButton ? "" : "hidden"} w-[40px] h-[40px] 
                absolute top-1/2 left-[0] translate-y-[-50%] flex justify-center items-center rounded-full border-2 border-[#26272B] rotate-180
                  bg-[#141518]
                 xl:w-[45px] xl:h-[45px]
                 1xl:w-[55px] 1xl:h-[55px]`} style={{ zIndex: 100 }} onClick={handlePrevClick}>

                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.00011L12.5 12.0001L1.5 23.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
                <button className={`w-[40px] h-[40px] ${activeNextButton ? "" : "hidden"}
                absolute top-1/2 right-0 translate-y-[-50%]
                flex justify-center items-center rounded-full border-2 border-[#26272B]
                  bg-[#141518]
                 xl:w-[45px] xl:h-[45px]
                 1xl:w-[55px] 1xl:h-[55px]`}
                    style={{ zIndex: 50 }}
                    onClick={handleNextClick}>
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.00011L12.5 12.0001L1.5 23.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>

    );
};