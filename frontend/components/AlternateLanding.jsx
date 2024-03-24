import Scroll from "../data/assets/ScrollDown2.gif"
import LogoVideo from "../data/assets/LogoVideo.mp4"
import MapGif from "../data/assets/Location.gif"

const AlternateLanding = () => {

    return(
    <div style={{height:"100vh",width:"100vw",border:"1px solid"}}>
        <div style={{height:"15vh",width:"100vw",backgroundColor:"black"}}>

        </div>
        <div style={{height:"70vh",width:"100vw",display:"flex"}}>
            <div style={{height:"70%",width:"40%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h1><span style={{color:"red"}}>TEDx</span>FISAT</h1>
                <p>16th April 2<span style={{color:"red"}}>K</span>24</p>
                <p><img src={MapGif} style={{height:"50px"}}/>Location</p>
            </div>
            <div style={{height:"115%",width:"60%",overflow:"hidden"}}>
                <video src={LogoVideo} autoPlay muted loop style={{width:"100%",height:"100%",border:"1px solid",transform:"scaleX(1.8) scaleY(1.8)"}}/>
            </div>
        </div>
        <div style={{height:"15vh",width:"40vw",textAlign:"center",transform:"translateY(-10vh)"}}>
            <img src={Scroll} style={{height:"90%",filter:"negative"}}/>
        </div>
    </div>
)
}

export default AlternateLanding