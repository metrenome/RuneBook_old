import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import { filterChampions } from '../actions';

const useStyles = theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
      textField: {
        width: '100%',
      },
  });

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel>Search Champions</InputLabel>
          <OutlinedInput
            onChange={(e) => this.props.filterChampions(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            labelWidth={140}
          />
          </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state:',state);
  return { champions: state.champions };
}

export default compose(withStyles(useStyles), connect(mapStateToProps, { filterChampions }))(SearchBar);