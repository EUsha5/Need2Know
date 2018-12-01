import React, { Component } from "react";

export default class Customer extends Component {
  render() {
    return (
      <>
        <h1>Welcome back, {this.props.match.params.userId}</h1>
      </>
    );
  }
}
