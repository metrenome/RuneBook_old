import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, InputAdornment, TextField  } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

import { filterChampions } from '../actions';

const styles = theme => ({
      textField: {
        width: '100%',
        paddingBottom: theme.spacing(2)
      },
  });

class SearchBar extends React.Component {
  renderChampionSearch() {
    console.log("clicked");
  }
  
  render() {
    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
        <TextField
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
          onClick={this.renderChampionSearch}
        />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return { champions: state.champions };
}

export default compose(withStyles(styles), connect(mapStateToProps, { filterChampions }))(SearchBar);