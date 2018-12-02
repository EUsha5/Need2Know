import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TempBreadcrumbs extends Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={'/user/user'}>User</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={'/admin/admin'}>Admin</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={'/cust/customer'}>Customer</Link>
          </li>
          <li className="breadcrumb-item active">Data</li>
        </ol>
      </div>
    );
  }
}
