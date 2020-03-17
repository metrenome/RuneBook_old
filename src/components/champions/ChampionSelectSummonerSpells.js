import React from 'react';

import { ButtonBase, Grid }from '@material-ui/core/';

const ChampionSelectSummonerSpells = () => {
    return (
        <React.Fragment>
            <Grid item>
                <ButtonBase>
                    <img alt='summoner1' src={`/images/summoners/SummonerFlash.png`} />
                </ButtonBase>
            </Grid>
            <Grid item>
                <ButtonBase>
                    <img alt='summoner2' src={`/images/summoners/SummonerHeal.png`} />
                </ButtonBase>
            </Grid>
        </React.Fragment>
    );
}

export default ChampionSelectSummonerSpells;