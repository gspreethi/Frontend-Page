import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



export default function Carousal()
{
    return(
        <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://raw.githubusercontent.com/gspreethi/Frontend-Page/main/raksha.jpg" height="500px" width="200px"  alt="First slide"/>
    <Carousel.Caption>
      <h3>surprise Your Loved ones on their best day</h3>
       </Carousel.Caption>
 </Carousel.Item>
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://raw.githubusercontent.com/gspreethi/Frontend-Page/main/choclate.jpg" height="500px" width="200px" alt="Second slide"/>
    <Carousel.Caption>
      <h3>surprise Your Loved ones on their best day</h3>
    </Carousel.Caption>
  </Carousel.Item>
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://raw.githubusercontent.com/gspreethi/Frontend-Page/main/weddinggift.jpg" height="500px" width="200px" alt="Third slide"/>
    <Carousel.Caption>
      <h3>surprise Your Loved ones on their best day</h3>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       
    )
}
