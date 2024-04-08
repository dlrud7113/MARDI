import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const MainVisual = () => {
  return (
    <div className='MainVisual'>
    <Swiper className="mySwiper">
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./img/mainVisual02.png'} alt="메인비주얼02" />
          </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./img/mainVisual04.png'} alt="메인비주얼04" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'./img/mainVisual05.png'} alt="메인비주얼05" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default MainVisual
