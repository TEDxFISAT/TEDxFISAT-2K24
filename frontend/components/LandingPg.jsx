import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import DC from './DisappearingContainers'
gsap.registerPlugin(ScrollTrigger)
import '../styles/landingpg.css'

const LandingPg = () => {

    const cursorblobRef = useRef(null)

    useEffect(() => {
        gsap.fromTo("img",{
          opacity:0,
          scale:0
        },{
          opacity:1,
          scale:9,
          scrollTrigger:{
            trigger:"img",
            start:"80% 50%",
            end:"bottom 10%",
            scrub:true,
            // markers:true,
            toggleActions:"restart none none none"}
        })
      },[])

      useEffect(() => {
        const cursorBlob = cursorblobRef.current;
    
        const handleMouseMove = (e) => {
          const x = e.clientX - cursorBlob.clientWidth / 2;
          const y = e.clientY - cursorBlob.clientHeight / 2;
    
          gsap.to(cursorBlob, {
            duration: 1,
            left: x,
            top: y,
          });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);


      //X popping up and then the whole thing pops up from left n moves to the right

    return(
        <>
      <div id='cursorblob' style={{position:"fixed",backgroundColor:"rgba(207, 49, 6, 1)",width:"150px",height:"150px",zIndex:-1,top:50,left:50,borderRadius:"50%"}} ref={cursorblobRef}></div>
      <DC/>
      <div className='top-layer'>
        {/* <h1>Page 1</h1> */}
        <div className='titleWrapper'>
          <div className='titleContainer1'></div>
          <div className='titleContainer2'> 
            <div>T</div>
            <div>E</div>
            <div>D</div>
            <div id="X">X</div>
          </div>
          <div className='titleContainer3'></div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiidDROP39u0-MHsf6su9EdIVM1bEyu0IC3g&usqp=CAU" style={{clipPath:"circle(10% at 50% 50%)"}}></img>
      </div>
      <div className='bottom-layer'>
        <h1 style={{marginTop:"35vh"}}>Page 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='bottom-layer'>
        <h1>Page 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </>
    )
}

export default LandingPg