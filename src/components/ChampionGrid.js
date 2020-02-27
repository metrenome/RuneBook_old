import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ChampionCard from './ChampionCard';

class ChampionGrid extends React.Component {
    championsList() {
        return this.props.champions.map(champion => {
            return <ChampionCard 
                key={champion.key}
                name={champion.name} 
                id={champion.key}
                image={champion.image}
            />
        });
    }
    
    render() {
        return (
            <Grid container>
                {this.championsList()}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return { champions: state.champions };
}

export default connect(mapStateToProps)(ChampionGrid);