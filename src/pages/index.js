import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

export default () => (
  <div style={{ color: `purple` }}>
    <Link className="menuLink" to="/contact/">
      Contact
    </Link>
    <Link className="menuLink" to="/about-css-modules/">
      About Css
    </Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  </div>
);
