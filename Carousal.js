import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Register from './Register';
export default function Carousal()
{
    return(
        <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhYoz-jhcJbR9h33_vZvIlIHWDQn_HExPRQ&usqp=CAU" height="500px" width="200px"  alt="First slide"/>
    <Carousel.Caption>
      <h3>surprise Your Loved ones on their best day</h3>
       </Carousel.Caption>
 </Carousel.Item>
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCsdKbTHB7EH-NlfX62qzQmn7dEI0GiwN2g&usqp=CAU" height="500px" width="200px" alt="Second slide"/>
    <Carousel.Caption>
      <h3>surprise Your Loved ones on their best day</h3>
    </Carousel.Caption>
  </Carousel.Item>
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="ne raakhi image peteyu" height="500px" width="200px" alt="Third slide"/>
    <Carousel.Caption>
      <h3>surprise Your Loved ones on their best day</h3>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       
    )
}
export default Pictures();
