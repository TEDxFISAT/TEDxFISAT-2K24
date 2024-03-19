import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import DC from './DisappearingContainers'
import '../styles/landingpg.css'
import About from './About'
import Video from './video'
gsap.registerPlugin(ScrollTrigger)

const LandingPg = () => {

    const cursorblobRef = useRef(null)

    useEffect(() => {
        gsap.fromTo("#zoom",{
          opacity:0.8,
          scale:0,
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
             padding:"15vw 0vw",
            //  paddingTop:"50vh",
             marginLeft:"0px",
              width:"100vw",
              duration: 0.3,
              borderTopLeftRadius:0,
              borderTopRightRadius:0,
              
              scrollTrigger: {
                  trigger: '.bottom-layer',
                  start: 'top 60%',
                  end: 'top 0%',
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


      //X popping up and then the whole thing pops up from left n moves to the right

    return(
        <>
      {/* <div id='cursorblob' style={{position:"fixed",backgroundColor:"rgba(255, 0,0, 1)",boxShadow:"0 0 10px black",width:"100px",height:"100px",zIndex:5,top:50,left:50,borderRadius:"50%"}} ref={cursorblobRef}></div> */}
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
        <div id="zoom" style={{clipPath:"circle(10% at 50% 50%)",backgroundColor:"rgba(255, 0,0, 1)"}}></div>
      </div>
      <Video/>
      <About/>
      <div style={{padding:0,margin:0,height:"100vh",color:"black"}}>
        <h1>Page 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </>
    )
}

export default LandingPg