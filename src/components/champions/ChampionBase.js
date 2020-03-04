import React from 'react';
import {
    useParams
  } from "react-router-dom";

const ChampionBase = () => {
    let { id } = useParams();
    console.log(`ChampionBase sees ${id}`);
    return <div>ChampionBase</div>;
};

export default ChampionBase;