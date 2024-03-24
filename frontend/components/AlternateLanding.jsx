import Scroll from "../data/assets/ScrollDown2.gif"
import LogoVideo from "../data/assets/LogoVideo.mp4"
import MapGif from "../data/assets/Location.gif"

const AlternateLanding = () => {

    return(
    <div style={{height:"100vh",width:"100vw",border:"1px solid"}}>
        <div style={{height:"15vh",width:"100vw",backgroundColor:"black"}}>

        </div>
        <div style={{height:"70vh",width:"100vw",display:"flex"}}>
            <div style={{height:"70%",width:"40%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid"}}>
                <p style={{fontSize:"5rem",margin:0,padding:0}}><span style={{color:"red",fontWeight:"800"}}>TEDx</span>FISAT</p>
                <p style={{fontSize:"2rem",margin:0,padding:0,fontWeight:"500"}}>16th APRIL 2<span style={{color:"red"}}>K</span>24</p>
                <div style={{display:"flex",width:"100%",border:"1px solid"}}>
                    <img src={MapGif} style={{height:"40px"}}/>
                    <p style={{fontSize:"1.2rem",margin:0,padding:0,fontWeight:"500"}}>FEDERAL INSTITUTE OF SCIENCE & TECHNOLOGY,ANGAMALY</p>
                </div>
            </div>
            <div style={{height:"115%",width:"60%",overflow:"hidden"}}>
                <video src={LogoVideo} autoPlay muted loop style={{width:"100%",height:"100%",border:"1px solid",transform:"scale(1.8)"}}/>
            </div>
        </div>
        <div style={{height:"15vh",width:"40vw",textAlign:"center",transform:"translateY(-10vh)"}}>
            <img src={Scroll} style={{height:"90%",filter:"negative"}}/>
        </div>
    </div>
)
}

export default AlternateLanding