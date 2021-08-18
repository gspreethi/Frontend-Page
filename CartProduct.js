import React from "react";
import "./CartProduct.css";
import {Button} from "reactstrap";

import { useStateValue } from "./StateProvider";

function CartProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  console.log(props);

  const removeFromBasket = (props) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div style={{display:"flex", backgroundColor:"white", margin:"5px", padding:"5px"}}>
    <div>
      <img  style={{height:"200px", objectFit:"contain", margin:"5px"}} src={props.image} alt="cardImage"></img>
      </div>
      <div>
      <h2>{props.name}</h2>
      <p>By {props.author}</p>
      <p><i className="fas fa-rupee-sign"></i>{props.price}</p>
      <Button
              className="cardButton bg-danger"
              onClick={() => removeFromBasket(props)}
            >
              Remove From Cart
            </Button>
        <div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
