import { useEffect,useRef } from 'react'
import Scroll from "../data/assets/ScrollDown2.gif"
import LogoVideo from "../data/assets/LogoVideo.mp4"
import MapGif from "../data/assets/Location1.gif"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import DC from './DisappearingContainers'
import '../styles/landingpg.css'
import About from './About'
import Video from './video'
import Speakers from './SpeakersMain'
import Ticket from './Ticket'
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

        // const tlLP = gsap.timeline();

        // tlLP.fromTo('.titleContainer3',{
        //   y:"-200%"
        // },{
        //   y:'-300%',
        //   delay:2.2,
        //   duration:1
        // })

        // tlLP.fromTo('#X',{
        //   backgroundColor:"red",
        //   color:"black"
        // },{
        //   backgroundColor:"rgba(255, 0, 0,0)",
        //   color:"red",
        //   duration:0.2
        // })

        // tlLP.fromTo('.titleContainer2',{
        //   y:"-100%",
        //   x:'-75%',
        // },{
        //   x:0,
        //   duration:1
        // })

        // gsap.fromTo('.TED',{
        //   opacity:0,
        //   scale:0
        // },{
        //   scale:1,
        //   delay:3.6,
        //   duration:0.7,
        //   opacity:1,
        //   stagger:{
        //     amount:0.3,
        //     from:'end'
        //   },
        // })
      },[])

      useEffect(() => {
        const tlLP = gsap.timeline();
        tlLP.fromTo('#titleWrapper',{
            y:'-100%'
          },{
            y:'-200%',
            duration:1,
            delay:2.2
          })

          tlLP.to('#title',{
            backgroundColor:"black",
            color:"red",
            duration:0.2
          })
        
          tlLP.fromTo('#title',{
            x:'-76%'
          },{
            x:0,
            duration:1
          })

          gsap.fromTo('.TEDD',{
            opacity:0,
            scale:0
          },{
            scale:1,
            delay:3.4,
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
      <div style={{height:"100vh",width:"100vw",zIndex:-1,overflow:"hidden",position:"sticky",top:0}}>
        <div style={{height:"15vh",width:"100vw",backgroundColor:"black"}}>

        </div>
        <div style={{height:"70vh",width:"100vw",display:"flex"}}>
            <div style={{height:"70%",width:"45%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                {/* <p style={{fontSize:"6rem",margin:0,padding:0}}><span style={{color:"red",fontWeight:"800"}}><div>T</div><div>E</div>Dx</span>FISAT</p> */}
                <div style={{display:"flex",fontSize:"6rem",margin:0,padding:0}}>
                    <div style={{position:"relative",display:"inline-block",minWidth:"12vw",maxWidth:"20vw",overflow:"hidden"}}>
                        <div id="title" style={{display:"flex",justifyContent:"center",fontWeight:"800",backgroundColor:"red",color:"black",minWidth:"100%",minHeight:"100%",transform:"translateX(-76%)"}}>
                            <div className="TEDD">T</div><div className="TEDD">E</div><div className="TEDD">D</div><div>x</div>
                        </div>
                        <div id="titleWrapper" style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"black"}}>

                        </div>
                    </div>
                    <div>FISAT</div>
                </div>
                <p style={{fontSize:"2rem",margin:0,padding:0,fontWeight:"500"}}>16th APRIL 2<span style={{color:"red"}}>K</span>24</p>
                <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
                    <img src={MapGif} style={{height:"40px"}}/>
                    <p style={{fontSize:"1.12rem",margin:0,padding:0,fontWeight:"500"}}>FEDERAL INSTITUTE OF SCIENCE & TECHNOLOGY,ANGAMALY</p>
                </div>
            </div>
            <div style={{height:"115%",width:"55%",overflow:"hidden"}}>
                <video src={LogoVideo} autoPlay muted loop style={{width:"100%",height:"100%",border:"1px solid",transform:"scale(1.8)"}}/>
            </div>
        </div>
        <div style={{height:"15vh",width:"45vw",textAlign:"center",transform:"translateY(-15vh)"}}>
            <img src={Scroll} style={{height:"100%",filter:"negative"}}/>
        </div>
        <div id="zoom" style={{clipPath:"circle(10% at 50% 50%)",backgroundColor:"red"}}></div>
    </div>
      <Video/>
      <About/>
      <Speakers/>
      <Ticket/>
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