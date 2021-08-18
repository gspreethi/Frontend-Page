import React from "react";
import "./ProductCard.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

import { useStateValue } from "./StateProvider";

function ProductCard(props) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = (props) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        name: props.name,
        image: props.image,
        price: props.price,
        author: props.author,
        year: props.year,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="productCard">
      <Card className="card">
        <CardImg className="cardImage"
          src={props.image}
        />
        <CardBody className="cardBody">
          <CardTitle className="cardTitle">{props.name}</CardTitle>
          <CardText className="cardAuthor">By {props.author}</CardText>
          <CardText className="cardPrice"><i className="fas fa-rupee-sign"></i>{props.price}</CardText>
          <Button className="cardButton" onClick={() => addToBasket(props)}>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;