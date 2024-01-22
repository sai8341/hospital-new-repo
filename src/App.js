import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import AyurGuide from './Components/AyurGuide';
import AllDoctorData from './Components/AllDoctorData';
import { Helmet } from 'react-helmet';
import AllServices from './Components/AllServices';
import TestimonialsAllData from './Components/TestimonialsAllData';
import ScrollToTop from './Components/ScrollToTop';
import SpecialitiesList from './Components/SpecialitiesList';

const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
            <Header />
            <Helmet>
              <title>Sri Deerghayu Ayuredic Hospital - Stree No-8, Habsiguda, Hyderabad, Telangana - 500007</title>
              <meta name="keywords" content="Best hospital in india, best hospital in hyderabad, ayurvedic hospital, best hospital in uppal, all types of care, best hospital in uppal" />
            </Helmet>
            <Routes>
              <Route path="/" element={<ScrollToTop><Home /></ScrollToTop>} />
              <Route path="/about" element={<ScrollToTop><About /></ScrollToTop>} />
              <Route path='/ayurveda-guide' element={<ScrollToTop><AyurGuide /></ScrollToTop>} />
              <Route path="/doctor-info" element={<ScrollToTop><AllDoctorData /></ScrollToTop>} />
              <Route path='/services' element={ <ScrollToTop><AllServices /></ScrollToTop>} />
              <Route path='/testimonials' element={<ScrollToTop><TestimonialsAllData /></ScrollToTop>} />
              <Route path='/specialities' element={<SpecialitiesList />} />
            </Routes>
            <Footer />
      </BrowserRouter>
    </div>
  )
}


export default App;
