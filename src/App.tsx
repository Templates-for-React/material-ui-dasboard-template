import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import SignIn from "./pages/sign-in";
import Error from "./pages/error";

import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

import themes from "./themes";
import { store } from "./redux";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.default}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/app/dashboard" />}
            />
            <Route
              exact
              path="/app"
              render={() => <Redirect to="/app/dashboard" />}
            />
            <PrivateRoute path="/app" component={Layout} />
            <PublicRoute path="/login" component={SignIn} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
