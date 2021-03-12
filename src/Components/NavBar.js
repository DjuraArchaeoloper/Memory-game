import React from "react";

class NavBar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="badge badge-primary game-title"> FatCat - Memory game </div>
        <div className="badge badge-dark name">{ name }</div>
        <div className="badge badge-dark score"> Your current score: {score}</div>
      </div>
    );
  }
}

export default NavBar;