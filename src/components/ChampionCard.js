import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardAction, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    card: {
      maxWidth: 154,
      maxHeight: 280
    },
  }));

const ChampionCard = (props) => {
    const classes = useStyles();

    return (
      <Grid item>
        <Card className={classes.card} variant='outlined'>
          <CardActionArea>
            <CardContent align='center'>
              <CardMedia component='img' alt={props.id} image={`../loading/${props.image}`}/>
              <Typography variant='button' display='block'>
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
};

export default ChampionCard;