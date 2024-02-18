import SponsorData from "../data/data"
import '../styles/sponsor.css'

const Sponsors = () => {
    console.log(SponsorData)
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
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Sponsors