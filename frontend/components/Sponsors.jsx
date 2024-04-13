import { useEffect } from "react";
import SponsorData from "../data/data";
import "../styles/sponsor.css";
import { GoArrowRight } from "react-icons/go";
import Footer from "./Footer";

const Sponsors = () => {
  console.log(SponsorData);

  // useEffect(() => {
  //     gsap.fromTo(".card",{
  //         scale:0,
  //         opacity:0
  //     },{
  //         scale:1,
  //         opacity:1,
  //         duration:1,
  //         stagger:0.5,
  //         scrollTrigger:{
  //           trigger:".cardWrapper",
  //           // markers:true,
  //           toggleActions:"restart none none none"}
  //       })
  // },[])

  return (
    <>
      <h1>Sponsors</h1>
      <div
        className="cardWrapper"
        style={
          window.innerHeight > window.innerWidth
            ? {
                flexDirection: "column",
                flexWrap: "nowrap",
              }
            : null
        }
      >
        {SponsorData.map(({ id, name, img }) => {
          return (
            <div
              className="card"
              key={id}
              style={
                window.innerHeight > window.innerWidth
                  ? { width: "90%", alignSelf: "center", marginBottom: "30px" }
                  : null
              }
            >
              <div className="imgDiv">
                <img
                  src={img}
                  style={{
                    height: "53vh",
                    width: "100%",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                ></img>
                <p>{name}</p>
              </div>
              <div className="glassDiv">
                <div>
                  <GoArrowRight
                    id="arrow"
                    style={{
                      color: "black",
                      width: "45%",
                      height: "45%",
                      marginTop: "25%",
                    }}
                  />
                </div>
                {/* <img src={img} style={{height:"35vh",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}></img> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sponsors;
