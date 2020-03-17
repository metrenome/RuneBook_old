import React, { useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper }from '@material-ui/core/';

import history from '../../history';
import ChampionSelectPosition from './ChampionSelectPosition';
import ChampionSelectSummonerSpells from './ChampionSelectSummonerSpells';
import ChampionItemBuilds from './ChampionItemBuilds';
import ChampionRuneBuilds from './ChampionRuneBuilds';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  imgBanner: {
    display: 'block',
    width: 308,
    height: 560,
  },
}));



const ChampionBase = ({ selectedChampion }) => {
  const classes = useStyles();

  if (!selectedChampion) {
    history.push('/');
    return <div>You will be sent back to the home page.</div>
  } else {
    return (
      <div>
        <Paper className={classes.paper}>
          <ChampionSelectPosition />
          <Button>Search Matchup...</Button>
          <Grid container spacing={2}>
            <Grid item>
              <img className={classes.imgBanner} alt="banner" src={`/images/banners/${selectedChampion.banner}`} />
            </Grid>
            <Grid item xs={12} sm container direction="column">
              <Grid item xs container spacing={2}>
                <ChampionSelectSummonerSpells />
              </Grid>
              <Grid item xs={5}>
                <ChampionItemBuilds />
              </Grid>
              <Grid item xs={5}>
                <ChampionRuneBuilds />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedChampion: state.selectedChampion };
}

export default connect(mapStateToProps)(ChampionBase);