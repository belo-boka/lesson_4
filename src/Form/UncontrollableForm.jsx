import React, { Component } from "react";

export default class Form extends Component {
  state = {
    username: "",
    password: "",
  };
  onSubmit = (evt) => {
    if (evt) {
      evt.preventDefault();
    }

    const { username, password } = this.state;

    this.props.onSubmit({
      username,
      password,
    });
  };
  onInputChange = (inputName) => (evt) => {
    evt.persist();
    this.setState(() => {
      return { [inputName]: evt.target.value };
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Логин
          <input onChange={this.onInputChange("username")} type="text" />
        </label>
        <label>
          Пароль
          <input onChange={this.onInputChange("password")} type="password" />
        </label>
        <button type="submit" />
      </form>
    );
  }
}
