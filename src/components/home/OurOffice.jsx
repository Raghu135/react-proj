import React from 'react';
import './OurOffice.scss';

function OurOffice() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      {/* <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol> */}

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img class="officeimg"
            src="https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img class="officeimg"
            src="https://jpeg.org/images/jpeg-home.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img class="officeimg"
            src="https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400"
            alt="Slide 3"
          />
        </div>
      </div>

      {/* Controls */}
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only"></span>
</a>
<a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only"></span>
</a>

    </div>
  );
}

export default OurOffice;
