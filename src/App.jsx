import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './views/home/home';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';


function App() {
  return(
  <Router>
    <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />} />

    </Routes>
    
    <Footer />
  </Router>
  )
}

export default App
