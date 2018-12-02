import React, { Component } from 'react';

export default class Admin extends Component {
  render() {
    return (
      <>
        <h1>Welcome back, {this.props.match.params.userId}</h1>
      </>
    );
  }
}
