import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import '../styles/landingpg.css'
import SplitType from 'split-type'
import Library from "../data/assets/Library.jpg"
gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useEffect(()=>{
        let tlm1 = gsap.timeline(
            { 
              scrollTrigger: {
                trigger: ".About-img-wrapper",
                toggleActions: 'restart none none none'
              }
            }
          )
          
          tlm1.fromTo(".About-img-wrapper div",
            {
              y:"-100%",
              x:"-19vw"
            },
            {
              y:0,
              x:"-19vw",
              delay:0.5,
              duration:0.5,
              // ease:"back.in"
            }
          )
  
          tlm1.fromTo(".About-img-wrapper div",
            {
              x:"-19vw"
            },
            {
              x:0,
              duration:0.5,
              // ease:"back.in"
            }
          )
  
          tlm1.fromTo(".About-img-wrapper img",
            {
              x:"-20vw"
            },
            {
              x:0,
              duration:0.1,
              // ease:"back.in"
            }
          )
  
          tlm1.fromTo(".About-img-wrapper div",
            {
              x:0
            },
            {
              x:"20vw",
              duration:0.5
            }
          )
    },[])

    useEffect(() => {
        const splitTypes = document.querySelectorAll('.reveal-text');
    
        splitTypes.forEach((char, i) => {
            const bg = char.dataset.bgColor;
            const fg = char.dataset.fgColor;

            const text = new SplitType(char,{types:'chars'})//new SplitType(char, { types: 'chars' });
            gsap.fromTo(
                text.chars,
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        // markers: true,
                        toggleActions: 'reverse none none none',
                    },
                }
            );
        });
    }, []);

    useEffect(() => {
      const splitTypes = document.querySelectorAll('.reveal-heading');
  
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
                  y:0,
                  ease:"out",
                  scrollTrigger: {
                      trigger: '.reveal-heading',
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

  return (
    <div className='bottom-layer' >
        <div className='section-wrapper'>
          <div style={{width:"70%"}}>
          <p className='reveal-heading'><span>OUR </span> THEME</p>
          <p className='reveal-text' data-bg-color="#606060" data-fg-color="white">
            The central focus of TEDxFISAT 2024 revolves around the theme “Refashioning the 
            Elementary”, which encapsulates the idea of reshaping fundamental elements. This 
            overarching theme delves deeply into the transformative journey of reconstructing core 
            components across various sectors or domains. It emphasizes the significant impact that 
            changes at the foundational level can have on the broader framework and mindset of a 
            system. These elementary changes are vital as they can either catalyse improvement or 
            present challenges. The discussions at TEDxFISAT will explore innovative approaches, 
            initiatives, and insights aimed at promoting positive change and evolution within 
            fundamental structures. This discourse will foster conversations about strategies for 
            sustainable progress and holistic development.
          </p>
          </div>
          <div className='About-img-wrapper'>
            <div></div>
            <img src={Library}></img>
          </div>
        </div>
        <br/><br/>
        <div className='section-wrapper'>
        <div className='About-img-wrapper'>
            <div></div>
            <img src={Library}></img>
          </div>
        <div style={{width:"70%"}}>
          <p className='reveal-heading'>TEDx<span style={{fontSize:"5rem"}}>FISAT</span></p>
          <p className='reveal-text' data-bg-color="#606060" data-fg-color="white">
            The central focus of TEDxFISAT 2024 revolves around the theme “Refashioning the 
            Elementary”, which encapsulates the idea of reshaping fundamental elements. This 
            overarching theme delves deeply into the transformative journey of reconstructing core 
            components across various sectors or domains. It emphasizes the significant impact that 
            changes at the foundational level can have on the broader framework and mindset of a 
            system. These elementary changes are vital as they can either catalyse improvement or 
            present challenges. The discussions at TEDxFISAT will explore innovative approaches, 
            initiatives, and insights aimed at promoting positive change and evolution within 
            fundamental structures. This discourse will foster conversations about strategies for 
            sustainable progress and holistic development.
          </p>
          </div>
        </div>
      </div>
  )
}

export default About