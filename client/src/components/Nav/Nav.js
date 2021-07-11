import React from "react";
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <a className="title">Grade Transfer</a>
        <div className="links">
          <a href="#">About</a>
          <a href="https://github.com/sqywer/grade-transfer" target="_blank">Source Code</a>
        </div>
      </div>
    )
  }
}

export default Nav;