import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './views/home/Home.jsx';
import Navbar from './views/components/Navbar.jsx';
import Footer from './views/components/Footer.jsx';
import ModeJam from './views/options/ModeJam.jsx';
import Scoreboard from './views/counter/Scoreboard.jsx';




function App() {
  return(
  <Router basename = "/MPC/">
    <Navbar />
    
    <Routes >
      
      <Route path="/" element={<Home />} />
      <Route path="/mode" element={<ModeJam/>}/>
      <Route path="/countEst" element={<Scoreboard/>}/>


    </Routes>
    
    <Footer />
  </Router>
  )
}

export default App
