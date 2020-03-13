import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Register } from '../RegisterModal';
import { Login } from '../LoginModal';

import Builds from '../builds/Builds';

import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      <Route exact path="/builds" component={Builds} />
    </Fragment>
  );
};

export default Routes;
