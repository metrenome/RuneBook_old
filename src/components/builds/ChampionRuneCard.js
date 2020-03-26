import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, ButtonBase, Card, CardContent, Grid } from '@material-ui/core';

import Perk from './Perk';
import * as runes from '../../constants/runes';

const ChampionRuneCard = () => {
    return (
        <Card variant='outlined'>
            <CardContent>
                <Grid container wrap='nowrap'>
                    <Grid container item direction='column' justify='center' alignItems='center'>
                        <Grid item xs={4}>
                            <Perk rune={runes.DOMINATION_ELECTROCUTE} />
                        </Grid>
                        <Grid item xs={2}>
                            <Perk rune={runes.DOMINATION_SUDDEN_IMPACT} />
                        </Grid>
                        <Grid item xs={2}>
                            <Perk rune={runes.DOMINATION_EYEBALL_COLLECTION} />
                        </Grid>
                        <Grid item xs={2}>
                            <Perk rune={runes.DOMINATION_RAVENOUS_HUNTER} />
                        </Grid>
                    </Grid>
                
                    <Grid container direction='column'>
                        <Grid item xs={6}>
                            <Perk rune={runes.PRECISION_TRIUMPH} />
                        </Grid>
                        <Grid item xs={6}>
                            <Perk rune={runes.PRECISION_LEGEND_ALACRITY} />
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ChampionRuneCard;