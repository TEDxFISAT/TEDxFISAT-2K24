import Scroll from "../data/assets/ScrollDown2.gif"
import LogoVideo from "../data/assets/LogoVideo.mp4"
// import MapGif from "../data/assets/Location.gif"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)

const AlternateLanding = () => {

    useEffect(() => {
        const tlLP = gsap.timeline();
        tlLP.fromTo('#titleWrapper',{
            y:'-100%'
          },{
            y:'-200%',
            duration:1
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
            delay:1.2,
            duration:0.7,
            opacity:1,
            stagger:{
              amount:0.3,
              from:'end'
            },
          })

    },[])

    return(
    <div style={{height:"100vh",width:"100vw",border:"1px solid",overflow:"hidden"}}>
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
            <img src={Scroll} style={{height:"90%",filter:"negative"}}/>
        </div>
        <div id="zoom" style={{clipPath:"circle(10% at 50% 50%)",backgroundColor:"rgba(255, 0,0, 1)"}}></div>
    </div>
)
}

export default AlternateLanding