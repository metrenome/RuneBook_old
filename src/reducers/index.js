import { combineReducers } from 'redux';

import championsData from '../assets/champions.json';
import { CHAMPION_FILTER_CHANGED } from '../constants';

const championsReducer = (championsFiltered = championsData, action) => {
    // action.payload is the search string
    switch (action.type) {
        case CHAMPION_FILTER_CHANGED:
            // take the search string and filter the list of champions with it, then return the list of filtered champions.
            return (
                championsData.filter(champion => {
                    return champion.name.toLowerCase().includes(action.payload.toLowerCase());
                })
            );
        default:
            // otherwise, return the entire champion list
            return championsFiltered;
    }
};

export default combineReducers({
    champions: championsReducer
});