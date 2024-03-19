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
              x:"-90%"
            },
            {
              y:0,
              x:"-90%",
              delay:0.5,
              duration:0.5,
              // ease:"back.in"
            }
          )
  
          tlm1.fromTo(".About-img-wrapper div",
            {
              x:"-90%"
            },
            {
              x:0,
              duration:0.5,
              // ease:"back.in"
            }
          )
  
          tlm1.fromTo(".About-img-wrapper img",
            {
              x:"-100%"
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
              x:"100%",
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
    <div className='bottom-layer' style={window.innerHeight>window.innerWidth?{height:"200vh"}:null} >
        <div className='section-wrapper' style={window.innerHeight>window.innerWidth?{flexDirection:"column",fontSize:"0.8em",height:"100vh"}:null}>
          <div style={window.innerHeight<window.innerWidth?{width:"70%"}:{width:"90%"}}>
          <p className='reveal-heading' style={window.innerHeight>window.innerWidth?{fontSize:"3em"}:null}><span style={window.innerHeight>window.innerWidth?{fontSize:"1em"}:null}>OUR </span> THEME</p>
          <p className='reveal-text' data-bg-color="#606060" data-fg-color="white">
          TEDxFISAT 2024 focuses on "Refashioning the Elementary," highlighting the transformative process of reshaping core elements across sectors. This theme emphasizes the profound impact foundational changes can have on broader frameworks and mindsets. Discussions will explore innovative approaches for promoting positive change and evolution within fundamental structures. TEDxFISAT aims to foster conversations about sustainable progress and holistic development, recognizing the significance of catalyzing improvements while navigating potential challenges.
          </p>
          </div>
          <div className='About-img-wrapper' style={window.innerHeight>window.innerWidth?{height:"45vh",width:"70vw"}:null}>
          <div style={window.innerHeight>window.innerWidth?{width:"100%"}:null}></div>
            <img src={Library} style={window.innerHeight>window.innerWidth?{width:"100%"}:null}></img>
          </div>
        </div>
        <br/><br/>
        <div className='section-wrapper' style={window.innerHeight>window.innerWidth?{flexDirection:"column-reverse",fontSize:"0.8em",height:"100vh"}:null}>
        <div className='About-img-wrapper' style={window.innerHeight>window.innerWidth?{height:"45vh",width:"70vw"}:null}>
            <div style={window.innerHeight>window.innerWidth?{width:"100%"}:null}></div>
            <img src={Library} style={window.innerHeight>window.innerWidth?{width:"100%"}:null}></img>
          </div>
        <div style={window.innerHeight<window.innerWidth?{width:"70%"}:{width:"90%"}}>
          <p className='reveal-heading' style={window.innerHeight>window.innerWidth?{fontSize:"3em"}:null} >TEDx<span style={{fontSize:"1em"}}>FISAT</span></p>
          <p className='reveal-text' data-bg-color="#606060" data-fg-color="white">
            TEDxFISAT, which stemmed from TED's mission to research and discover “ideas worth spreading," emerged in 2017, aiming to cultivate an inclusive community of thought leaders dedicated to making a positive impact on society. Organised by undergraduate student directors and staff advisors, TEDxFISAT provides events and resources to enrich FISAT's community. In 2018, our inaugural conference, BREATHTAKING DISARRAY, featured over ten speakers and four performances. We believe in the power of ideas to transform lives and aim to curate knowledge from the region's brightest minds, fostering an environment for engagement and curiosity.
          </p>
          </div>
        </div>
      </div>
  )
}

export default About