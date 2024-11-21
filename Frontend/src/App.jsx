import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate import here
import DashboardLayout from './components/dashboard/DashboardLayout';
import Order from './components/dashboard/Order';
import Wishlist from './components/dashboard/Wishlist';
import Profile from './components/dashboard/Profile';

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
import Login from './components/loginform';
import SignUp from './components/SignupForm';



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
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/dashboard/orders" />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="orders" element={<Order />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
