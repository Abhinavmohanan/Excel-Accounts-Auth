import React, {lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';
import './Login.css';
import Loader from '../../components/Loader/Loader';

import { login } from '../../config/auth0';

const Callback = lazy(() => import('./Callback'));

const LoginButton = () => (
  <button onClick={login} className='btn'>Login</button>
);

const Login = (props) => {
  const { match } = props;
  return (
    <div className='loginPage fullCenter'>
      <Route exact path={`${match.url}`} component={LoginButton} />
      <Suspense fallback={<div className='fullCenter'><Loader /></div>}>
        <Route path={`${match.url}/callback/`} component={Callback} />
      </Suspense>
    </div>
  );
};
export default Login;
