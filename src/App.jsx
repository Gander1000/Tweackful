import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heder from './Components/Heder/Heder';
import Home from './Components/Home/Home';
import Home_bleck from './Components/Home_bleck/Home_bleck';
import Features from './Components/Features/Features';
import Pricing from './Components/Pricing/Pricing';


function App() {

  return (
    <>
    <Router>
      <Heder/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/.Features' element={<Features/>}/>
        <Route path='/.Home_bleck' element={<Home_bleck/>}/>
        <Route path='/.Pricing' element={<Pricing/>}/>
      </Routes>

    </Router>
    </>
  )
}

export default App
