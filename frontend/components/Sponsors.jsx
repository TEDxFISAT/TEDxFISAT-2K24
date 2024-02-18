import SponsorData from "../data/data"
import '../styles/sponsor.css'

const Sponsors = () => {
    console.log(SponsorData)
    return(
        <>
            <h1>Sponsors</h1>
            {SponsorData.map(({id,name,img}) => {
                return(
                    <div className="card" key={id}>
                        <div className="imgDiv">
                            <img src={img}></img>
                            <p>{name}</p>
                        </div>
                        <div className="glassDiv"></div>
                    </div>
                )
            })}
        </>
    )
}

export default Sponsors