import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import img from "../data/assets/ComingSoon.png";
import "../styles/spkr.css";

import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (activeCard !== null) {
      const splitTypes = document.querySelectorAll(".reveal-headingSpeaker");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars" });
        gsap.fromTo(
          text.chars,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            y: 20,
            ease: "back.out",
            scrollTrigger: {
              trigger: `#swiper-slide-${activeCard}`,
              toggleActions: "restart none none none",
            },
          }
        );
      });
    }
  }, [activeCard]);

  return (
    <div
      className="containerr speaker-page"
      style={{
        backgroundColor: "black",
        borderRadius: "30px",
        marginTop: 0,
      }}
    >
      <h1
        className="reveal-headingSpeaker"
        style={{
          color: "white",
          fontWeight: "800",
          fontSize: "5rem",
          margin: "0 0 3% 5%",
          overflow: "hidden",
        }}
      >
        SPEAKERS
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(swiper) => setActiveCard(swiper.activeIndex)}
      >
        <SwiperSlide id="swiper-slide-0">
          <div className="speaker-info">
            <img src={img} alt="slide_image" />
            {activeCard === 0 && (
              <p className="speaker-name">Speaker Name 1</p>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide id="swiper-slide-1">
          <div className="speaker-info">
            <img src={img} alt="slide_image" />
            {activeCard === 1 && (
              <p className="speaker-name">Speaker Name 2</p>
            )}
          </div>
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
