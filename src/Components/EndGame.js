import React from "react";
import { messages } from "./Messages";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame( false );
  };
  
  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2>{ messages[0].title }</h2>
          <p>{ messages[0].message }</p>
          <button className="btn btn-info" onClick={ this.handleClick }>
            Start another game?
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;