import React from 'react'

// import Categories from './Categories';
import FAQComponent from './Faq';
import ContactUsComponent from './Contact';
import FeedbackSlider from './Feedback';
import Shop from './Shop';
import SlideBar from './SlideBar';


const Home = () => {
  return (
    <div>
      <SlideBar/>
      <Shop />
      <ContactUsComponent/>
      <FAQComponent/>
      <FeedbackSlider/>
      
    </div>
  )
}

export default Home
