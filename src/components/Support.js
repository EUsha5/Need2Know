import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Support extends Component {
  render() {
    return (
      <div className="support-container">
        <div className="yellow-square">
          <Link to="/support/newticket">
            <h1 className="support-text">Create Ticket</h1>
          </Link>
        </div>
        <div className="purple-square">
          <h1 className="support-text">Open Ticket</h1>
        </div>
        <div className="cyan-square">
          <h1 className="support-text">New Order</h1>
        </div>
        <div className="grey-square">
          <h1 className="support-text">Orders</h1>
        </div>
      </div>
    );
  }
}

export default Support;
