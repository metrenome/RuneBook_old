import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import { Avatar, Grid, InputAdornment, TextField  } from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

import { filterChampions } from '../actions';
import champions from '../assets/champions';

const NavigateToChampion = (event, value) => {
  if (value) {
    history.push(`/champion/${value.key}`);
  }
}

const SearchBar = () => {
  return (
    <Grid container justify='center'>
      <Grid item xs={3}>
        <Autocomplete
          id="searchbar"
          freeSolo
          autoHighlight={true}
          clearOnEscape={true}
          onChange={(event, value) => NavigateToChampion(event, value)}
          options={champions}
          getOptionLabel={champion => champion.name}
          renderOption={(champion) => (
            <React.Fragment>
              <Avatar alt={champion.name} src={`./images/${champion.avatar}`} paddingRight={1} />
              {champion.name}
            </React.Fragment>
          )}
          renderInput={params => (
            <TextField {...params} 
              label="Search Champions"
              margin="normal"
              variant="outlined" 
              // TextField currently has a bug where an input adornment breaks the search.
              // See: https://github.com/mui-org/material-ui/issues/19479 & https://github.com/mui-org/material-ui/issues/13898
              // InputProps={{
              //   endAdornment: (
              //   <InputAdornment position="end">
              //     <SearchIcon />
              //   </InputAdornment>
              //   ),
              // }} 
              />
          )}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return { champions: state.champions };
}

export default connect(mapStateToProps, { filterChampions })(SearchBar);