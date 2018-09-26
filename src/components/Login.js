import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: {}
    };
  }

  componentDidMount() {
    axios.get("/api/getUser").then(response => {
      this.setState({ user: response.data });
    });
  }

  login = () => {
    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        this.setState({ user: response.data });
      });
  };

  logout = () => {
    axios.get("/api/logout").then(response => {
      this.setState({ user: response.data });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Login Page</h3>
        <div>
          <input
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="enter username"
          />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="enter password"
          />
          <button onClick={this.login}>Login</button>
        </div>
        <button onClick={this.logout}>Logout</button>
        <div>
          <h3>Username: {this.state.user.username}</h3>
          <p>Password: {this.state.user.password}</p>
        </div>
      </div>
    );
  }
}

export default Login;
