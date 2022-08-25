import Carousel from 'react-bootstrap/Carousel';

function RmCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.rmjo.in/AirOKWeb%20(1).png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.rmjo.in/WP-Web.png"
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default RmCarousel;