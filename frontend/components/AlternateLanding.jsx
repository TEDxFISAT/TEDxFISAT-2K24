import Scroll from "../data/assets/ScrollDown2.gif"
import Logo from "../data/assets/Website.gif"

const AlternateLanding = () => {

    return(
    <div style={{height:"100vh",width:"100vw",border:"1px solid"}}>
        <div style={{height:"15vh",width:"100vw",border:"1px solid",backgroundColor:"red"}}>

        </div>
        <div style={{height:"70vh",width:"100vw",border:"1px solid",display:"flex"}}>
            <div style={{height:"100%",width:"40%",border:"1px solid red",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h1>TEDxFISAT</h1>
                <p>16th April 2K24</p>
                <p>📍Location</p>
            </div>
            <div style={{height:"90%",width:"60%",border:"1px solid red",backgroundImage:`url(${Logo})`,backgroundSize:"cover"}}>
            </div>
        </div>
        <div style={{height:"15vh",width:"100vw",border:"1px solid",textAlign:"center"}}>
            <img src={Scroll} style={{height:"90%",filter:"negative"}}/>
        </div>
    </div>
)
}

export default AlternateLanding