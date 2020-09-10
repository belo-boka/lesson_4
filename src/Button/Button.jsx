import React from "react";

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
    // console.log(this.state);
    console.log("Button constructor");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState !== this.state) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    console.log("Button did mount");
  }

  handleOnClick = (evt) => {
    // this.setState((actualState) => {
    //   return { ...actualState, number: (actualState.number += 1) };
    // });
    this.props.onClick(this.props.buttonId, evt);
  };

  render() {
    console.log("render");
    return (
      <button className={this.props.className} onClick={this.handleOnClick}>
        {/* {this.props.number} */}
        {this.state.number}
      </button>
    );
  }
}

export default Button;
