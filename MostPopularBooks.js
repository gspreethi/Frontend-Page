import React, { useState, useEffect } from "react";
import "./NewReleases.css";
import axios from "axios";
import ProductCard from "./ProductCard";

import { Container, Row, Col } from "reactstrap";

function MostPopularBooks() {
  
  const [data, setData] = useState({ book: [] });
  const [dropdownSelect, setDropdownSelect] = useState("All");


  useEffect(() => {
    var url = "http://localhost:8081/api/book";
    if (dropdownSelect === "APJ Abdul Kalam") {
      url = "http://localhost:8081/api/bookByAuthor/APJ Abdul Kalam";
    } else if (dropdownSelect === "Chetan Bhagat") {
      url = "http://localhost:8081/api/bookByAuthor/Chetan Bhagat";
    }
    const fetchdata = async () => {
      const result = await axios(url);

      setData(result.data);
    };
    fetchdata();
  }, [dropdownSelect]);

  if (data.book.length !== 0) {
    return (
      <div className="MostPopularBooks">
        <h1>
          <center>Most Popular Books</center>
        </h1>
        <div className="dropdownSelectDiv">
        Filter by Authors:
        <select
          className="dropdownSelect"
          onChange={(e) => {
            setDropdownSelect(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="APJ Abdul Kalam">APJ Abdul Kalam</option>
          <option value="Chetan Bhagat">Chetan Bhagat</option>
        </select>
      </div>
        <Container>
          <Row>
            {data.book.map((books) => {
              return (
                <Col md={4} lg={3} sm={12} key={books._id}>
                  <ProductCard
                    id={books._id}
                    name={books.name}
                    image={books.image}
                    price={books.price}
                    author={books.author}
                    year={books.year}
                    rating={books.rating}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
  return <div></div>;
}

export default MostPopularBooks;
