import React from 'react';
import 'typeface-roboto';
import { Box, CssBaseline, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import SearchBar from './components/SearchBar';
import ChampionGrid from './components/ChampionGrid';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  spacing: 4
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box paddingTop={darkTheme.spacing(1)} paddingRight={darkTheme.spacing(1)} paddingLeft={darkTheme.spacing(1)} variant="outlined">
          <SearchBar />
          <ChampionGrid />
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;