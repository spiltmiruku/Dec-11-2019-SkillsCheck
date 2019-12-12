import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { getUser } from "../../redux/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = () => {
    axios
      .post("/api/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  handleRegister = () => {
    const { username, password } = this.state;
    axios
      .post("/api/auth/register", { username, password })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="form-box">
          <div className="logostuff">
            <img src={require("../../resources/download.png")} />
            <h1 style={{ color: "white" }}>Helo</h1>
          </div>

          <div className="form">
            <label for='username' style={{ color: '#f2f2f2'}}>Username:</label>
            <input
              maxLength="20"
              placeholder="Enter Username"
              name="username"
              onChange={event => this.handleInput(event)}
            />
            <label for='password' style={{ color: '#f2f2f2'}}>Password:</label>
            <input
              type="password"
              maxLength="20"
              placeholder="Enter Password"
              name="password"
              onChange={event => this.handleInput(event)}
            />

            <button onClick={this.handleLogin}> Log in </button>
            <button onClick={this.handleRegister}> Register </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);
