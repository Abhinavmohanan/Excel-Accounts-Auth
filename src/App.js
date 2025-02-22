import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Loader from './components/Loader/Loader';

const Login = lazy(() => import('./pages/Login/OAuthLogin'));
const Logout = lazy(() => import('./pages/Logout/Logout'));
const Authorize = lazy(() => import('./pages/Authorize/Authorize'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense
          fallback={
            <div className="fullCenter">
              <Loader />
            </div>
          }
        >
          <Switch>
            <PublicRoute path="/auth/login" component={Login} />
            <PrivateRoute path="/auth/logout" component={Logout} />
            <Route path="/auth/authorize" component={Authorize} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
