import React from 'react';
import 'typeface-roboto';
import { Box, CssBaseline, Divider, createMuiTheme } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';

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
        <Box className={classes.box}>
          <Header />
          <Divider className={classes.divider} />
          To get started, search for a champion!
        </Box>
      </ThemeProvider>
    );
  }

export default App;