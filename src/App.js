import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth0WebClient } from "@8base/auth";
import { EightBaseAppProvider } from "@8base/app-provider";
import { EightBaseBoostProvider, AsyncContent } from "@8base/boost";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Admin from "./components/Admin";
import User from "./components/User";
import Customer from "./components/Customer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={() => <h1>Login</h1>} />
          <Route path="/admin/:userId" component={Admin} />
          <Route path="/user/:userId" component={User} />
          <Route path="/cust/:userId" component={Customer} />
        </div>
      </Router>
    );
  }
}

export default App;
