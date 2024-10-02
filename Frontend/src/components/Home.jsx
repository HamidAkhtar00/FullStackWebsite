import React from 'react'

import Categories from './Categories';
import FAQComponent from './Faq';
import ContactUsComponent from './Contact';


const Home = () => {
  return (
    <div>
      <Categories />
      <ContactUsComponent/>
      <FAQComponent/>
      
    </div>
  )
}

export default Home
