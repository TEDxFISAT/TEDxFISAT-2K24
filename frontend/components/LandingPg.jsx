import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import DC from './DisappearingContainers'
import '../styles/landingpg.css'
import SplitType from 'split-type'
import Library from "../data/assets/Library.jpg"
gsap.registerPlugin(ScrollTrigger)

const LandingPg = () => {

    const cursorblobRef = useRef(null)

    useEffect(() => {
        gsap.fromTo("#zoom",{
          opacity:0.8,
          scale:0,
          backgroundColor:"red"
        },{
          opacity:1,
          scale:9,
          // backgroundColor:"black",
          scrollTrigger:{
            trigger:"#zoom",
            start:"80% 50%",
            end:"bottom -100%",
            scrub:true,
            // markers:true,
            toggleActions:"restart none none none"}
        })

        gsap.to(
          '.bottom-layer',
          {
             padding:"5vw 0vw",
             marginLeft:"0px",
              width:"100vw",
              duration: 0.3,
              borderTopLeftRadius:0,
              borderTopRightRadius:0,
              
              scrollTrigger: {
                  trigger: '.bottom-layer',
                  start: 'top 70%',
                  end: 'top 10%',
                  scrub: 1,
                  // markers: true,
                  toggleActions: 'reverse none none reverse',
              },
          }
      );

        const tlLP = gsap.timeline();

        tlLP.fromTo('.titleContainer3',{
          y:"-200%"
        },{
          y:'-300%',
          delay:2.2,
          duration:1
        })

        tlLP.fromTo('#X',{
          backgroundColor:"red",
          color:"black"
        },{
          backgroundColor:"rgba(255, 0, 0,0)",
          color:"red",
          duration:0.2
        })

        tlLP.fromTo('.titleContainer2',{
          y:"-100%",
          x:'-75%',
        },{
          x:0,
          duration:1
        })

        gsap.fromTo('.TED',{
          opacity:0,
          scale:0
        },{
          scale:1,
          delay:3.6,
          duration:0.7,
          opacity:1,
          stagger:{
            amount:0.3,
            from:'end'
          },
        })

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
        const cursorBlob = cursorblobRef.current;
    
        const handleMouseMove = (e) => {
          const x = e.clientX - cursorBlob.clientWidth / 2;
          const y = e.clientY - cursorBlob.clientHeight / 2;
    
          gsap.to(cursorBlob, {
            duration: 0.8,
            left: x,
            top: y,
          });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

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


      //X popping up and then the whole thing pops up from left n moves to the right

    return(
        <>
      <div id='cursorblob' style={{position:"fixed",backgroundColor:"rgba(255, 0,0, 1)",boxShadow:"0 0 10px black",width:"100px",height:"100px",zIndex:5,top:50,left:50,borderRadius:"50%"}} ref={cursorblobRef}></div>
      <DC/>
      <div className='top-layer'>
        {/* <h1>Page 1</h1> */}
        <div className='titleWrapper'>
          <div className='titleContainer1'></div>
          <div className='titleContainer2'> 
            <div className='TED'>T</div>
            <div className='TED'>E</div>
            <div className='TED'>D</div>
            <div id="X">X</div>
          </div>
          <div className='titleContainer3'></div>
        </div>
        <div id="zoom" style={{clipPath:"circle(10% at 50% 50%)"}}></div>
      </div>
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
      {/* <div className='bottom-layer' style={{padding:0,margin:0}}>
        <h1>Page 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> */}
    </>
    )
}

export default LandingPg