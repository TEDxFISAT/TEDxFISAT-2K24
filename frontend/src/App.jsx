import LandingPg from '../components/LandingPg'
import RegistrationMain from "../components/Regsiteration"
import SpeakerMain from "../components/SpeakersMain"
import './App.css'
import { Route,Routes } from 'react-router-dom'


function App() {
  
  return(
    <>
    <Routes>
      <Route path="/" element={<LandingPg/>}/>
      <Route path="/Speakers" element={<SpeakerMain/>}/>
      <Route path="/Registration" element={<RegistrationMain/>}/>
    </Routes>
    </>
    )
}

export default App