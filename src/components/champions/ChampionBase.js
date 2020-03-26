import React from 'react';
import 'swiper/css/swiper.min.css';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper }from '@material-ui/core/';

import history from '../../history';
import ChampionSelectPosition from './ChampionSelectPosition';
import ChampionSelectSummonerSpells from './ChampionSelectSummonerSpells';
import ChampionItemBuilds from '../builds/ChampionItemBuilds';
import ChampionRuneBuilds from '../builds/ChampionRuneBuilds';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  gridBase: {
    flexGrow:1
  },
  imgBanner: {
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
          <Grid container spacing={2} wrap='nowrap'>
            <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
              <img className={classes.imgBanner} alt='banner' src={`/images/banners/${selectedChampion.banner}`} />
            </Grid>
            <Grid className={classes.gridBase} item xs={6} sm={7} md={8} lg={9} xl={10} container spacing={2} direction='column'>
              <Grid item container spacing={2}>
                <ChampionSelectSummonerSpells />
              </Grid>
              <Grid item xs>
                <ChampionItemBuilds />
              </Grid>
              <Grid item xs>
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