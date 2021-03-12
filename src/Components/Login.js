import React from "react";

class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label> Please enter your name: &nbsp; &nbsp; </label>
              <br />
              <input type="name" className="form-control-lg" onChange={ this.handleChange } />
            </div>
            <button onClick={ this.handleClick } className="btn-lg btn-info">
              Start game
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;