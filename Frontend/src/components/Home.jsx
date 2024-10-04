import React from 'react'

// import Categories from './Categories';
import FAQComponent from './Faq';
import ContactUsComponent from './Contact';
import FeedbackSlider from './Feedback';
import Shop from './Shop';


const Home = () => {
  return (
    <div>
      <Shop />
      <ContactUsComponent/>
      <FAQComponent/>
      <FeedbackSlider/>
      
    </div>
  )
}

export default Home
