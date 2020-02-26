import React from 'react';

const ChampionCard = (props) => {
    return (
        <div>
            {props.name}
            <img alt={props.id} src={`./images/${props.image}`} />
        </div>
     );
};

export default ChampionCard;