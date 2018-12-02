import React, { Component } from 'react';

class NewTicket extends Component {
  render() {
    return (
      <div className="newticket-container">
        <div className="newticket-header">
          <h1>New Ticket</h1>
        </div>
        <h1 className="newticket-name">Name:</h1>
        <input className="name-input" name="name" value="name" placeholder="Name" />
        <h1 className="newticket-source">Source:</h1>
        <input className="source-input" name="source" value="source" placeholder="source" />
        <h1 className="newticket-id">ID:</h1>
        <input className="id-input" name="id" value="id" placeholder="id" />
        <h1 className="newticket-dept">Dept:</h1>
        <select className="dept-selector" placeholder="Department" />
        <h1 className="newticket-desc">Description:</h1>
        <textarea className="desc-area" />
      </div>
    );
  }
}

export default NewTicket;
