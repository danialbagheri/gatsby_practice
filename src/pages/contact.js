import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home </Link>
    <Link className="menuLink" to="/contact/">
      {" "}
      Contact
    </Link>
    <Link className="menuLink" to="/about-css-modules/">
      {" "}
      About Css
    </Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
);
