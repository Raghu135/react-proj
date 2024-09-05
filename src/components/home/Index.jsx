import React from 'react'

import Slider from './Slider'
import Introduction from './Introduction'
import FeaturedBooks from './FeaturedBooks'
import MostSellingBooks from './MostSellingBooks'
import OurOffice from './OurOffice'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // To include the necessary JS for carousel functionality


function Index() {
  return (
    <>    
    <Slider />
    <Introduction />
    <FeaturedBooks/>
    <OurOffice/>
    <MostSellingBooks/>
  </>
  )
}

export default Index