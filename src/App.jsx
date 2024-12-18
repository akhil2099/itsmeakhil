import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import DemoProduct from './pages/DemoProduct';
import Portfolio from './pages/Portfolio';
import Cursor from './components/cursor';
import DevopsPortfolio from './pages/devops-portfolio';
import PhotographyPortfolio from './pages/photography-portfolio';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("itsmeakhil");

  return (
    <>
    <div>
    <Cursor/>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<DemoProduct />} />
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/devops-portfolio" element={<DevopsPortfolio />} />
            <Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
          </Routes>
        </ScrollToTop>
      </Router>
      </div>
    </>
  );
}


export default App;
