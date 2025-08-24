import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './views/home/home';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import ModeJam from './views/options/ModeJam';
import Count_Est from './views/counter/Count_Est';



function App() {
  return(
  <Router>
    <Navbar />
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/mode" element={<ModeJam/>}/>
      <Route path="/CountEst" element={<Count_Est/>}/>


    </Routes>
    
    <Footer />
  </Router>
  )
}

export default App
