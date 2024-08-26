import React from 'react'

import Slider from './Slider'
import Introduction from './Introduction'
import FeaturedBooks from './FeaturedBooks'
import MostSellingBooks from './MostSellingBooks'
import OurOffice from './OurOffice'

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