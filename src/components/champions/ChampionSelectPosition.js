import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab/';

const useStyles = makeStyles(theme => ({
    imgPosition: {
      width: 36,
      height: 36,
    },
  }));

const ChampionSelectPosition = () => {
    const classes = useStyles();

    const [position, setPosition] = React.useState('top');

    const handlePosition = (event, newPosition) => {
      setPosition(newPosition);
    }

    return (
        <ToggleButtonGroup value={position} exclusive onChange={handlePosition} aria-label='select position'>
            <ToggleButton value='top' aria-label='top'>
                <img className={classes.imgPosition} alt='top' src={'/images/positions/Top.png'} />
            </ToggleButton>
            <ToggleButton value='jungle' aria-label='jungle'>
                <img className={classes.imgPosition} alt='jungle' src={'/images/positions/Jungle.png'} />
            </ToggleButton>
            <ToggleButton value='mid' aria-label='mid'>
                <img className={classes.imgPosition} alt='mid' src={'/images/positions/Mid.png'} />
            </ToggleButton>
            <ToggleButton value='bot' aria-label='bot'>
                <img className={classes.imgPosition} alt='bot' src={'/images/positions/Bot.png'} />
            </ToggleButton>
            <ToggleButton value='support' aria-label='support'>
                <img className={classes.imgPosition} alt='support' src={'/images/positions/Support.png'} />
            </ToggleButton>
            <ToggleButton value='all' aria-label='all'>
                <img className={classes.imgPosition} alt='all' src={'/images/positions/All.png'} />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ChampionSelectPosition;