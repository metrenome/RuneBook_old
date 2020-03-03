import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Grid, InputAdornment, Paper, TextField  } from '@material-ui/core/';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

import { filterChampions } from '../actions';
import champions from '../assets/champions';
const SearchBar = () => {

  const renderSearchList = () => {
    console.log("search bar focused");
  }

  return (
    <Grid container justify='center'>
      <Grid item xs={6}>
        <Autocomplete
          id="searchbar"
          freeSolo
          options={champions}
          getOptionLabel={option => option.name}
          renderOption={(option) => (
            <React.Fragment>
              <Avatar alt={option.name} src={`./images/${option.avatar}`} paddingRight={1} />
              {option.name}
            </React.Fragment>
          )}
          renderInput={params => (
            <TextField {...params} label="Search Champions" margin="normal" variant="outlined" />
          )}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* <TextField
          fullWidth={true}
          id='searchbar'
          label='Search Champions'
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => this.props.filterChampions(e.target.value)}
          onClick={renderSearchList}
        /> */}
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return { champions: state.champions };
}

export default connect(mapStateToProps, { filterChampions })(SearchBar);