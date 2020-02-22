import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
  
    <nav className="navbar bg-dark ">
  
    <img src='https://mdbootstrap.com/img/logo/mdb-transparent.png' height="30" alt="mdb logo" />

     <Link to="/" className="text-white">Home</Link>
   
     
    </nav>
    
  );
};

export default Header;

