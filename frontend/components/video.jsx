import { useEffect } from 'react'
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
                  end: 'top 40%',
                  scrub: true,
                  // markers: true,
                  toggleActions: 'reverse none none none',
              },
          }
      );
      tlv1.fromTo('.hero',{
        scale:3,
      },{
            backgroundColor:"red",
            transform:"rotate(0deg)",
            scale:2.5,
            scrollTrigger: {
              trigger: '.hero',
              start: 'top 40%',
              end: 'top 10%',
              scrub: true,
              // markers: true,
              toggleActions: 'reverse none none none',
          }
      })
    
      gsap.fromTo('.notHero',{
        backgroundColor: "rgba(10, 255, 10, 0)",
        scale:0.5,
        transform:"rotate(30deg)"
      },{
        backgroundColor: "rgba(10, 255, 10, 1)",
        scale:1,
        transform:"rotate(0deg)",
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 40%',
          end: 'top 10%',
          scrub: true,
          // markers: true,
          toggleActions: 'reverse none none none',
      }
      })

      gsap.to('.notHero',{
        opacity:0,
        scrollTrigger: {
            trigger: '.notHero',
            start: 'top -20%',
            end:"top -100%",
            scrub:true,
            markers: true,
            toggleActions: 'reverse none none none',
        }
      })
      },[])
    return(
        <div className="notHero" style={{height:"100vh", width:"100vw",backgroundColor:"green",display:"flex",justifyContent:"center",alignItems:"center",position:"sticky",top:"0vh",marginTop:"50vh"}}>
          <div className="hero" style={{height:"10vh", width:"10vh",backgroundColor:"white",transform:"rotate(-30deg)"}}></div>
        </div>
    )
}

export default Video