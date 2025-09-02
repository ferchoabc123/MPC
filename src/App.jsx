import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './views/home/home';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import ModeJam from './views/options/ModeJam';
import Scoreboard from './views/counter/Scoreboard';




function App() {
  return(
  <Router>
    <Navbar />
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/mode" element={<ModeJam/>}/>
      <Route path="/CountEst" element={<Scoreboard/>}/>


    </Routes>
    
    <Footer />
  </Router>
  )
}

export default App
