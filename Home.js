import React from "react";
import { Link } from "react-router-dom";
import {Container} from "reactstrap";
import "./Home.css";
import choclate from "./images/choclate.jpg";
import weddinggift from "./images/weddinggift.jpg"
import Rakhi from "./images/Rakhi.jpg"
function Home() {
  return (
    <div className="container">
      <Bookbanner className="bookbanner" image={choclate} to=""/>
      <Bookbanner className="bookbanner" image={weddinggift} to="" />
      <Bookbanner className="bookbanner" image={Rakhi} to="" />
      
    </div>
    
  );
}

function Bookbanner(props) {
  return (
    <Container className="Home">
    <Link to={props.to}>
          <img className="bookbanner__Image" src={props.image} alt="Cardimage" />
      </Link>
    </Container>
  );
}

export default Home;
