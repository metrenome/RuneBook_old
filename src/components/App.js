import React from 'react';
import 'typeface-roboto';
import { Box, CssBaseline, Divider, createMuiTheme } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import LandingPage from './LandingPage';
import ChampionBase from './champions/ChampionBase';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  spacing: 4,
});

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const App = () => {
  const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Box className={classes.box}>
            <Header />
            <Divider className={classes.divider} />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/champion/:id" exact component={ChampionBase} />
            </Switch>
          </Box>
        </Router>
      </ThemeProvider>
    );
  }

export default App;