import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';  // Example component for Home page
import Shop from './components/Shop';  // Example component for Shop page
import Pages from './components/Pages';  // Example component for Pages page
import Blog from './components/Blog';  // Example component for Blog page
import Contact from './components/Contact';  // Example component for Contact page


function App() {
  return (
    <Router xs={{}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
