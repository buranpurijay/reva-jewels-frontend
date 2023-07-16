import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Design" />
      <h1 className="app__header-h1">The Key To Fine Diamonds</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button">
        Buy Diamonds
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.diamond13} alt="header_img" />
    </div>
  </div>
);

export default Header;
