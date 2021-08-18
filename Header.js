import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  let history = useHistory();
  const [{ basket, user }] = useStateValue();
  const [input, setInput] = useState("");

  const handleSearch = async (e) => {
    if(input!==""){
      history.push(`/searchResult/${input}`);
    }
   
  };
  return (
    <nav className="header">
      <div>
        <Link className="header__brand" to="/">
          GiftStore
        </Link>
      </div>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch} className="header__searchButton">
          Search
        </button>
      </div>

      <div className="header__nav">
        <Link to="/cart" className="header__link">
          <i className="fas fa-shopping-cart"></i>
          <span className="basketItemCount"> {basket?.length} </span>
        </Link>
        {user === null ? (
          <Link to="/loginPage" className="header__link">
            Login
          </Link>
        ) : (
          <div className="header__userNameDiv">
            <p className="header__Hello">Hello</p>
            <p className="header__userName">{user.userName}</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
