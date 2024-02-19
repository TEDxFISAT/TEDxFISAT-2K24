import { useEffect } from "react"
import SponsorData from "../data/data"
import '../styles/sponsor.css'
import { GoArrowRight } from "react-icons/go";

const Sponsors = () => {
    console.log(SponsorData)

    useEffect(() => {

    },[])

    return(
        <>
            <h1>Sponsors</h1>
            <div className="cardWrapper">
                {SponsorData.map(({id,name,img}) => {
                    return(
                        <div className="card" key={id}>
                            <div className="imgDiv">
                                <img src={img} style={{height:"53vh",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}></img>
                                <p>{name}</p>
                            </div>
                            <div className="glassDiv">
                                <div>
                                    <GoArrowRight style={{color:"black",width:"45%",height:"45%",marginTop:"25%"}}/>
                                </div>
                                {/* <img src={img} style={{height:"35vh",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}></img> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Sponsors