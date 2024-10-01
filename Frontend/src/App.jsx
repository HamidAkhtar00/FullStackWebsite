import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SlideBar from './components/slidebar';
import Home from './components/Home'
import FeatureBar from './components/FeatureBar';

// function Home() {
//   return <h1>Home Page</h1>;
// }

function Contact() {
  return <h1>Contact Page</h1>;
}

function FAQ() {
  return <h1>FAQ Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <Header />
      <SlideBar />
      <FeatureBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
