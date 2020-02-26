import React from 'react';
import 'typeface-roboto';

import SearchBar from './components/SearchBar';
import ChampionGrid from './components/ChampionGrid';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ChampionGrid />
      </div>
    );
  }
}

export default App;