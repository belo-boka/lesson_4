import React from "react";
import PropTypes from "prop-types";

import Form from "./Form/ControllableForm";

const rightUsername = "test";
const rightPassword = "12345";

const MIN_NAME_LENGTH = 4;
const MAX_NAME_LENGTH = 10;

const minLength = (name) => {
  if (name.length === 0 || name.length >= MIN_NAME_LENGTH) {
    return "";
  }
  return "Имя должно быть больше 4 ";
};

const maxLength = (name) => {
  if (name.length <= MAX_NAME_LENGTH) {
    return "";
  }
  return "Имя должно быть меньше 10 ";
};

const isRequired = (field) => {
  if (field.length !== 0) {
    return "";
  }
  return "Это поле обязательно";
};

const validator = {
  username: {
    default: [],
    onInputChange: [],
    onBlur: [isRequired, minLength, maxLength],
  },
  password: [],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wrongForm: false,
      username: "",
      password: "",
      validationState: {
        username: null,
        password: null,
      },
    };
  }

  handleOnSubmit = () => {
    const { username, password } = this.state;
    console.log(username, password);
    if (username === rightUsername && password === rightPassword) {
      return true;
    }
    this.setState({ wrongForm: true });
    return false;
  };

  validateState = (inputName, value, methodName) => {
    const { validationState } = this.state;
    const validators = methodName
      ? validator[inputName][methodName]
      : validator[inputName].default;
    if (validators && validators.length > 0) {
      const error = validators.reduce((acc, validator) => {
        acc = `${acc}${validator(value)}`;
        return acc;
      }, "");
      if (error) {
        this.setState((actualState) => {
          return {
            validationState: {
              ...actualState.validationState,
              [inputName]: error,
            },
          };
        });
      } else if (validationState[inputName]) {
        this.clearValidateFieldState(inputName);
      }
    }
  };

  clearValidateFieldState = (inputName) => {
    this.setState((actualState) => {
      return {
        validationState: {
          ...actualState.validationState,
          [inputName]: null,
        },
      };
    });
  };

  onInputChange = (inputName, event) => {
    // inputName = username
    this.validateState(inputName, event.target.value, "onInputChange");
    event.persist();
    this.setState(() => {
      return { [inputName]: event.target.value };
    });
  };

  handleOnBlur = (inputName, evt) => {
    this.validateState(inputName, evt.target.value, "onBlur");
  };

  handleOnFocus = (inputName) => {
    this.clearValidateFieldState(inputName);
  };

  render() {
    const { validationState, username, password } = this.state;
    return (
      <>
        <Form
          validationState={validationState}
          onInputChange={this.onInputChange}
          onSubmit={this.handleOnSubmit}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          fields={{
            username,
            password,
          }}
        />
        {/* {this.state.wrongForm && <p>"Неверный логин и/или пароль"</p>} */}
      </>
    );
  }
}

export default App;
