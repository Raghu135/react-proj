import React from 'react'
import './home.scss'

function Introduction() {
  return (<div class="home">
    <div>
      <h4 class="homeintro">Introduction</h4>
      <span>
        <p>
        Whether you’re a passionate reader, a curious learner, 
        or simply seeking your next favorite read, we offer a 
        wide selection of books across all genres. Explore bestsellers, 
        discover hidden gems, and dive into a world of knowledge, 
        imagination, and inspiration. Join our community of book lovers 
        today and embark on endless literary adventures!
        </p>
      </span>
    </div>
    <div>
      <img class="home_image" src={"/img/introduction_book.jpg"} alt="banner" width="100%"/>
    </div>
    </div>
  )
}

export default Introduction