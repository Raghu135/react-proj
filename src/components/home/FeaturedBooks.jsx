import React from "react";
import Slider from "react-slick";
import "./FeaturedBooks.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Card Component
const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-next-arrow`} onClick={onClick}>
      ➔
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-prev-arrow`} onClick={onClick}>
      ←
    </div>
  );
};

// FeaturedBooks Component
function FeaturedBooks() {
  const cardsData = [
    {
      id: 1,
      title: "CARD 1",
      content: "Clark Kent",
      imgUrl: "/img/book1.jpeg",
    },
    {
      id: 2,
      title: "CARD 2",
      content: "Bruce Wayne",
      imgUrl: "/img/bbok2.jpeg",
    },
    {
      id: 3,
      title: "CARD 3",
      content: "Peter Parker",
      imgUrl: "/img/book3.webp",
    },
    {
      id: 4,
      title: "CARD 4",
      content: "Tony Stark",
      imgUrl: "https://unsplash.it/201/201",
    },
    {
      id: 5,
      title: "CARD 5",
      content: "Reed Richards",
      imgUrl: "https://unsplash.it/202/200",
    },
    {
      id: 6,
      title: "CARD 6",
      content: "Wade Wilson",
      imgUrl: "https://unsplash.it/200/199",
    },
    {
      id: 7,
      title: "CARD 7",
      content: "Peter Quill",
      imgUrl: "https://unsplash.it/199/199",
    },
    {
      id: 8,
      title: "CARD 8",
      content: "Steven Rogers",
      imgUrl: "https://unsplash.it/199/200",
    },
    {
      id: 9,
      title: "CARD 9",
      content: "Bruce Banner",
      imgUrl: "https://unsplash.it/200/198",
    },
    {
      id: 10,
      title: "CARD 10",
      content: "Vincent Strange",
      imgUrl: "https://unsplash.it/198/199",
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use custom NextArrow
    prevArrow: <PrevArrow />, // Use custom PrevArrow
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container featured-books">
      <h1 style={{ textAlign: 'center' }} className="featured-title">Featured Books</h1>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <Card
            key={card.id} // Adding unique key for each card
            title={card.title}
            content={card.content}
            imgUrl={card.imgUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedBooks;
