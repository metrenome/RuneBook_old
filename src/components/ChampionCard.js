import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

const ChampionCard = (props) => {
    const classes = useStyles();
    
    return (
        <div>
            <Avatar alt={props.id} src={`./images/${props.image}`} className={classes.large} />
            {props.name}
        </div>
     );
};

export default ChampionCard;