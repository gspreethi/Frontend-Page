import React, { useState, useEffect } from "react";
import "./WeddingGift.css";
import axios from "axios";
import ProductCard from "./ProductCard";

import { Container, Row, Col } from "reactstrap";

function WeddingGift() {
 
  const [data, setData] = useState({ book: [] });
  const [dropdownSelect, setDropdownSelect] = useState("All");


  useEffect(() => {
    var url = "";
    if (dropdownSelect === "") {
      url = "";
    } else if (dropdownSelect === "") {
      url = "";
    }
    const fetchdata = async () => {
      const result = await axios(url);

      setData(result.data);
    };
    fetchdata();
  }, [dropdownSelect]);



  if (data.book.length!== 0) {
    return (
      <div className="weddinggift">
      <h1>
          <center>wedding gifts</center>
        </h1>
        <div className="dropdownSelectDiv">
          Filter by gifts:
          <select
            className="dropdownSelect"
            onChange={(e) => {
              setDropdownSelect(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        
        <Container>
          <Row>
            {data.book.map((books) => {
              return (
                <Col md={4} lg={3} sm={12} key={books._id}>
                  
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
  return <div>No Data</div>;
}

export default WeddingGift