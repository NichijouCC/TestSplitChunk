import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route
    {...rest}
    render={props =>
      window.localStorage.getItem("token") ?
        <Component {...props} />
        :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    }
  />
  );
}

export default PrivateRoute
