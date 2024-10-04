import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SlideBar from './components/slidebar';
import Home from './components/Home'
import Footer from './components/Footer';
import FAQComponent from './components/Faq';
import ContactUsComponent from './components/Contact';
import Categories from './components/Categories';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <Router>
      <Header />
      <SlideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsComponent />} />
        <Route path="/faq" element={<FAQComponent />} />
        {/* <Route path="/feedback" element={<FeedbackSlider />} /> */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
