import React from "react";
import PropTypes from "prop-types";

function Text({ text }) {
  return <>{<p>{text}</p> || <h6>{text}</h6>}</>;
}

const propTypes = {
  text: PropTypes.string,
};

Text.propTypes = propTypes;

Text.defaultProps = {
  text: "defaultText",
};

export default React.memo(Text);
