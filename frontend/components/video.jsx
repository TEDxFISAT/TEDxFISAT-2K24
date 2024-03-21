import { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import vBW from "../data/assets/vBW.mp4"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Video = () => {
    useEffect(() => {
        let tlv1 = gsap.timeline()
        tlv1.fromTo(
          '.hero',
          {
              opacity:0,
              scale:1,
          },
          {
            opacity:1,
              scale:3,
              // duration: 0.3,
              scrollTrigger: {
                  trigger: '.hero',
                  start: 'top 80%',
                  end: 'top 50%',
                  scrub: true,
                  // markers: true,
                  toggleActions: 'reverse none none none',
              },
          }
      );
      tlv1.fromTo('.hero',{
        scale:3,
      },{
            transform:"rotate(0deg)",
            opacity:0,
            scale:2.5,
            scrollTrigger: {
              trigger: '.hero',
              start: 'top 50%',
              end: 'top 10%',
              scrub: true,
              // markers: true,
              toggleActions: 'reverse none none none',
          }
      })

      gsap.to("#playButton",{
        opacity:0,
        scale:0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top 50%',
            end: 'top 39%',
            scrub: true,
            // markers: true,
            toggleActions: 'reverse none none none',
        }
      })
    
      gsap.fromTo('.notHero video',{
        opacity:0,
        // scale:0.5,
        // transform:"rotate(30deg)"
      },{
        opacity:1,
        scale:1,
        // transform:"rotate(0deg)",
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 50%',
          end: 'top 10%',
          scrub: true,
          // markers: true,
          toggleActions: 'reverse none none none',
      }
      })

      gsap.fromTo('.notHero',{
        scale:0.7,
        transform:"rotate(10deg)"
      },{
        scale:1,
        transform:"rotate(0deg)",
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 50%',
          end: 'top 5%',
          scrub: true,
          // markers: true,
          toggleActions: 'reverse none none none',
      }
      })

      gsap.to('.notHero',{
        opacity:0,
        scrollTrigger: {
            trigger: '.bottom-layer',
            start: 'top 110%',
            end:"top 80%",
            scrub:true,
            // markers: true,
            toggleActions: 'reverse none none none',
        }
      })
      },[])
    return(
        <div className="notHero" style={{height:"100vh", width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"sticky",top:"0vh",marginTop:"50vh"}}>
          <div className="hero" style={{position:"relative",height:"10vh", width:"10vh",backgroundColor:"black",transform:"rotate(-10deg)", borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <FaPlay id="playButton" style={{position:"absolute",height:"3.5vh", width:"3.5vh",color:"white",zIndex:2,backgroundColor:"black"}}/>
            <FaPause id="pauseButton" style={{position:"absolute",height:"3.5vh", width:"3.5vh",color:"white",zIndex:1}}/>
          </div>
          <video src={vBW} type="video/mp4" style={{position:"absolute",height:"100%",width:"100%",objectFit:"cover",opacity:0}} autoPlay muted loop></video>
        </div>
    )
}

export default Video