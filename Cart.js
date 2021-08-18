import React from "react";
import { useStateValue } from "./StateProvider";
import "./cart.css";
import CartProduct from "./CartProduct";

import { Container, Row, Col } from "reactstrap";
import { getBasketTotal } from "./reducer";
import {Link} from 'react-router-dom'
function Cart() {
  const [{ basket }] = useStateValue();

  return (
    <div className="cart">
      {basket.length === 0 ? (
        <div>
          <h2>Your Shoping cart is empty</h2>
        </div>
      ) : (
        <div>
       
          <div className="checkout col-lg-4 col-md-8 col-sm-12">
            <div className="cartValue">Your cart value is: {getBasketTotal(basket)}</div>
            <Link to="/checkout"><button className="checkoutButton">Checkout</button></Link>
     
          </div>
          <Container>
            <Row>
              {basket.map((books) => {
                return (
                  <Col lg={12} sm={12} md={12} key={books.id}>
                    <CartProduct
                      id={books.id}
                      name={books.name}
                      image={books.image}
                      price={books.price}
                      rating={books.rating}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Cart;
