import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heder from './Components/Heder/Heder';
import Home_bleck from './Components/Home_bleck/Home_bleck';
import Features from './Components/Features/Features';
import Pricing from './Components/Pricing/Pricing';
import Adout_us from './Components/Adout_us/Adout_us';
import Link_Home from './Components/Home/Link_Home';


function App() {

  return (
    <>
    <Router>
      <Heder/>

      <Routes>
        <Route path='/' element={<Link_Home/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/Home_bleck' element={<Home_bleck/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Adout_us' element={<Adout_us/>}/>
      </Routes>

    </Router>
    </>
  )
}

export default App
