import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ControllableInput extends PureComponent {
  handleOnInputChange = (evt) => {
    this.props.onInputChange(this.props.id, evt);
  };
  handleOnBlur = (evt) => {
    this.props.onBlur(this.props.id, evt);
  };
  handleOnFocus = (evt) => {
    this.props.onFocus(this.props.id, evt);
  };
  render() {
    const { label, type, validationState, value } = this.props;
    return (
      <label>
        {label}
        <input
          onBlur={this.handleOnBlur}
          onFocus={this.handleOnFocus}
          onChange={this.handleOnInputChange}
          type={type}
          value={value}
        />
        {validationState && <p className="red">{validationState}</p>}
      </label>
    );
  }
}

ControllableInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  validationState: PropTypes.string,
  type: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

ControllableInput.defaultProp = {
  type: "text",
  validationState: null,
};
