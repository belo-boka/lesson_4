import React from "react";

import ContextProvider from "./ContextProvider";

class ContextConsumer extends React.PureComponent {
  render() {
    const { Component, onClick } = this.props;
    return (
      <ContextProvider.Consumer>
        {({ className, onClick, number }) => (
          <Component
            onClick
            className={className}
            // onClick={onClick}
            number={number}
          />
        )}
      </ContextProvider.Consumer>
    );
  }
}

export default ContextConsumer;
