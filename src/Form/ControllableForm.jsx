import React, { Component } from "react";

import ControllableInput from "./ControllableInput";

export default class Form extends Component {
  onSubmit = (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    this.props.onSubmit();
  };

  render() {
    const {
      validationState: { username, password },
      fields,
    } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <ControllableInput
          label={"Логин *"}
          onInputChange={this.props.onInputChange}
          id="username"
          value={fields.username}
          validationState={username}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        />
        <ControllableInput
          label={"Пароль *"}
          type="password"
          id="password"
          value={fields.password}
          onInputChange={this.props.onInputChange}
          validationState={password}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        />
        <button type="submit" />
      </form>
    );
  }
}
