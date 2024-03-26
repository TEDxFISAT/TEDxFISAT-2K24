import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import img from '../data/assets/ComingSoon.png';
import '../styles/spkr.css'

import SplitType from 'split-type'
import { useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function App() {

  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-headingSpeaker');

    splitTypes.forEach((char, i) => {

        const text = new SplitType(char,{types:'chars'})//new SplitType(char, { types: 'chars' });
        gsap.fromTo(
            text.chars,
            {
                opacity:0,
                y:100
            },
            {
                opacity:1,
                duration: 0.8,
                stagger: 0.08,
                y:20,
                // delay:0.1,
                ease:"back.out",
                scrollTrigger: {
                    trigger: '#exploreBtn',
                    // start: 'top 80%',
                    // end: 'top 20%',
                    // scrub: true,
                    // markers: true,
                    toggleActions: 'restart none none none',
                },
            }
        );
    });
}, []);

  // useEffect(() => {
  //   gsap.fromTo('.swiper_container',{
  //       opacity:0,
  //       y:400
  //     },{
  //       y:0,
  //       duration:1,
  //       opacity:1,
  //       stagger:0.2,
  //       scrollTrigger: {
  //           trigger: '.containerr speaker-page',
  //           // start: 'top 80%',
  //           // end: 'top 20%',
  //           // scrub: true,
  //           // markers: true,
  //           toggleActions: 'restart none none none',
  //       },
  //     })},[])


  return (
 

    <div className="containerr speaker-page" style={{backgroundColor:"black",borderRadius:"30px",marginTop:0}}>
      <h1 className="reveal-headingSpeaker"  style={{color:"white",fontWeight:"800",fontSize:"5rem",margin:"0 0 3% 5%",overflow:"hidden"}} >SPEAKERS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;