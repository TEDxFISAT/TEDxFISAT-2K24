import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import DC from './DisappearingContainers'
import '../styles/landingpg.css'
import SplitType from 'split-type'
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
          backgroundColor:"black",
          scrollTrigger:{
            trigger:"#zoom",
            start:"80% 50%",
            end:"bottom -100%",
            scrub:true,
            // markers:true,
            toggleActions:"restart none none none"}
        })

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
                    stagger: 0.01,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        // markers: true,
                        toggleActions: 'play play reverse reverse',
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
                  duration: 0.4,
                  stagger: 0.08,
                  y:0,
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
      <div className='bottom-layer' style={{marginTop:"135vh"}}>
        <h1 className='reveal-heading' style={{overflow:"hidden",color:"rgba(255, 0,0, 1)",fontWeight:"800",fontSize:"4.5rem"}}>PAGE 2</h1>
          <p className='reveal-text' data-bg-color="#606060" data-fg-color="white">
            TEDxFISAT, which stemmed from TED's mission to research and discover “ideas worth 
            spreading”, emerged in 2017, aiming to cultivate an inclusive and equitable community of 
            thought leaders capable of positively impacting society. Organized by undergraduate student 
            directors and staff advisors, TEDxFISAT offers events, connections, and ongoing information 
            to elevate FISAT's vibrancy and prosperity. In 2018, TEDxFISAT hosted its inaugural in-person 
            conference,BREATHTAKING DISARRAY, featuring over 10 speakers from diverse fields and 
            four performances. We fervently believe in the transformative potential of ideas to alter 
            perspectives, lives, and the world at large. Our community endeavors to curate a repository 
            of knowledge from the region's brightest minds, fostering an environment where curious 
            minds can engage with ideas and one another.
          </p>
      </div>
      <div className='bottom-layer' style={{padding:0,margin:0}}>
        <h1>Page 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </>
    )
}

export default LandingPg