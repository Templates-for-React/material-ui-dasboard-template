import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter, useHistory,
} from "react-router-dom";
import clsx from "clsx";
import {Box, IconButton, Link} from '@material-ui/core'
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Github as GithubIcon,
} from 'mdi-material-ui';
import {useTypedSelector} from "../../redux";
import useStyles from "./styles";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";



function Layout(props: LayoutProps) {
  const classes = useStyles();


  const layoutState = useTypedSelector(state => state.layout);
  const history = useHistory();

  return (
    <div className={classes.root}>
      <>
        <Header history={history} />
        <Sidebar />
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpen,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link
                color={'primary'}
                href={'https://flatlogic.com/'}
                target={'_blank'}
                className={classes.link}
              >
                Flatlogic
              </Link>
              <Link
                color={'primary'}
                href={'https://flatlogic.com/about'}
                target={'_blank'}
                className={classes.link}
              >
                About Us
              </Link>
              <Link
                color={'primary'}
                href={'https://flatlogic.com/blog'}
                target={'_blank'}
                className={classes.link}
              >
                Blog
              </Link>
            </div>
            <div>
              <Link
                href={'https://www.facebook.com/flatlogic'}
                target={'_blank'}
              >
                <IconButton aria-label="facebook">
                  <FacebookIcon/>
                </IconButton>
              </Link>
              <Link
                href={'https://twitter.com/flatlogic'}
                target={'_blank'}
              >
                <IconButton aria-label="twitter">
                  <TwitterIcon/>
                </IconButton>
              </Link>
              <Link
                href={'https://github.com/flatlogic'}
                target={'_blank'}
              >
                <IconButton
                  aria-label="github"
                  style={{marginRight: -12}}
                >
                  <GithubIcon/>
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

interface LayoutProps {

}

export default withRouter(Layout);
