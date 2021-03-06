import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Auth0WebClient } from '@8base/auth';
import { EightBaseAppProvider } from '@8base/app-provider';
import { EightBaseBoostProvider, AsyncContent } from '@8base/boost';
import { ToastContainer, toast } from 'react-toastify';

import { ProtectedRoute } from 'shared/components';
import { TOAST_SUCCESS_MESSAGE } from 'shared/constants';

import { MainPlate, ContentPlate, Nav } from './components';
import { Auth } from './routes/auth';

import NewTicket from './components/NewTicket';
import Support from './components/Support';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';
import Customer from './components/Customer';
import FormPage from './components/FormPage';
import TempBreadcrumb from './components/TempBreadcrumbs';

const { REACT_APP_8BASE_API_ENDPOINT } = process.env;

const AUTH_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH_DOMAIN = 'auth.8base.com';

const auth0WebClient = new Auth0WebClient({
  domain: AUTH_DOMAIN,
  clientID: AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/auth`,
});

class App extends React.PureComponent {
  // renderContent = ({ loading }) => (
  //   <AsyncContent loading={loading} stretch>
  //     <Switch>
  //       <Route path="/auth" component={Auth} />
  //       <Route>
  //         <MainPlate>
  //           <Nav.Plate color="BLUE">
  //             <Nav.Item icon="Group" to="/brokers" label="Brokers" />
  //             <Nav.Item icon="Customers" to="/customers" label="Customers" />
  //             <Nav.Item icon="House" to="/properties" label="Properties" />
  //             <Nav.Item icon="Contract" to="/listings" label="Listings" />
  //           </Nav.Plate>
  //           <ContentPlate>
  //             <Switch>
  //               <ProtectedRoute exact path="/brokers" component={Brokers} />
  //               <ProtectedRoute exact path="/customers" component={Customers} />
  //               <ProtectedRoute exact path="/properties" component={Properties} />
  //               <ProtectedRoute exact path="/listings" component={Listings} />
  //               <Redirect to="/brokers" />
  //             </Switch>
  //           </ContentPlate>
  //         </MainPlate>
  //       </Route>
  //     </Switch>
  //   </AsyncContent>
  // );

  onRequestSuccess = ({ operation }) => {
    const message = operation.getContext()[TOAST_SUCCESS_MESSAGE];

    if (message) {
      toast.success(message);
    }
  };

  render() {
    return (
      <Router>
        <EightBaseBoostProvider>
          <EightBaseAppProvider
            uri={REACT_APP_8BASE_API_ENDPOINT}
            authClient={auth0WebClient}
            onRequestSuccess={this.onRequestSuccess}
          >
            {({ loading }) => (
              <AsyncContent loading={loading} /*stretch */>
                <div className="container-fluid">
                  <TempBreadcrumb />
                  <Nav.Plate color="RED">
                    <Nav.Item icon="Group" to="/finances" label="Finances" />
                    <Nav.Item icon="Customers" to="/customers" label="Customers" />
                    <Nav.Item icon="House" to="/support" label="Support" />
                    <Nav.Item icon="Contract" to="/products" label="Products" />
                  </Nav.Plate>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={FormPage} />
                    <Route path="/admin/:userId" component={Admin} />
                    <Route path="/user/:userId" component={User} />
                    <Route path="/customers/:userId" component={Customer} />
                    <Route exact path="/support" component={Support} />
                    <Route path="/support/newticket" component={NewTicket} />
                  </Switch>
                </div>
              </AsyncContent>
            )}
          </EightBaseAppProvider>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </EightBaseBoostProvider>
      </Router>
    );
  }
}

export default App;
