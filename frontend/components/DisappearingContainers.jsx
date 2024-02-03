import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const DC = () => {

  let redboxes = []
  for(let i=0;i<15;i++){
    redboxes.push(<div className={i%2?"odd":"even"}></div>)
  }

  useEffect(() => {
    
    gsap.fromTo('.odd',{
      y:0
    },{
      y:'-100vh',
      delay:1,
      duration:1.2,
      stagger:0.2,
      scrollTrigger:{
        trigger:"#disapperaingContainer",
        toggleActions:"play none none none"}
    })

    gsap.fromTo('.even',{
      y:0
    },{
      y:'100vh',
      delay:0.5,
      duration:1.5,
      stagger:0.2,
      scrollTrigger:{
        trigger:"#disapperaingContainer",
        toggleActions:"play none none none"}
    })
  
  },[])

    return(
      <div id='disapperaingContainer'>
        {redboxes}
      </div>
    )
}

export default DC