import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    small: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

const Perk = (props) => {
    const classes = useStyles();
    const rune = props.rune;

    const size = rune.size == 'small' ? classes.small : classes.large;
    
    console.log(classes.small);

    return (
        <React.Fragment>
            <IconButton size='small'>
                <Avatar className={size} src={rune.perk} />
            </IconButton>
        </React.Fragment>
    );
}

export default Perk;