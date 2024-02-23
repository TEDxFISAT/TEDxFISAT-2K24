import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import img from '../data/assets/sponsorMock.jpg';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SpeakersMain = () => {
  return (
    <div className='bg-red-50 w-full min-h-screen'>
        <Swiper>
          <SwiperSlide><img src={img} alt='img'/></SwiperSlide>
        </Swiper>
    </div>
    )
}

export default SpeakersMain