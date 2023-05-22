import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
    <Carousel >
      <Carousel.Item interval={1000}>
        <img width={'100%'} height={400}
          className="d-block w-100"
          src="./img/UxMomiVRgwA.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Акция ДР</h3>
          <p>Приходите к нам на свой день рождения и онн станет незабываемым!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img width={'100%'} height={400}
          className="d-block w-100"
          src="./img/06.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Slider