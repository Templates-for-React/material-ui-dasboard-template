import {Redirect, Route, RouteComponentProps} from "react-router";
import React from "react";
import {useTypedSelector} from "../../redux";

function PrivateRoute(props: PrivateRouteProps) {

  const {component, ...rest} = props;

  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

interface PrivateRouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  [items: string]: any;
}

export default PrivateRoute;