import userEvent from "@testing-library/user-event";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Footer.css";
import {useStateValue} from './StateProvider'

function Footer() {

  let history = useHistory();
  const [{}, dispatch] = useStateValue();

  const handleSignOut=()=>{
    dispatch({
      type: 'SIGNOUT_USER',
      user:null
    })

    history.push('/')
  }


  return (
    <div className="footer conatiner-fluid">
      <h2 className="footer__contactDetails">Contact details</h2>
      <p>Email: help@giftstore.com</p>
      <p>Call: 1800-1234-1234</p>
      <Link to="/" className="footer__signoutLink" onClick={handleSignOut}>Sign out</Link>
    </div>
  );
}

export default Footer;
