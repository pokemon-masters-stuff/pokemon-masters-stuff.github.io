import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Builds from '../builds/Builds';

import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <PrivateRoute exact path="/builds" component={Builds} />
    </Fragment>
  );
};

export default Routes;
