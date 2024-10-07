import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import SlideBar from './components/SlideBar';
import Home from './components/Home'
import Footer from './components/Footer';
import FAQComponent from './components/Faq';
import ContactUsComponent from './components/Contact';
import Shop from './components/Shop';
import ProductDetails from './components/ProductDetails';
import FeedbackSlider from './components/Feedback';
import ShoppingCarts from './components/ShoppingCarts';
import Checkout from './components/Checkout';



function App() {
  return (
    <Router>
      <Header />
      {/* <SlideBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsComponent />} />
        <Route path="/faq" element={<FAQComponent />} />
        <Route path="/feedback" element={<FeedbackSlider />} />
        <Route path="/categories" element={<Shop />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCarts />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
