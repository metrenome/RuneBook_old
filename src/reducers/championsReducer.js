import _ from 'lodash';

import { SELECT_CHAMPION } from '../constants';
import championsData from '../assets/champions.json';

export const champions = () => {
    return championsData;
}

export const selectedChampion = (selectedChampion = null, action) => {
    switch (action.type) {
        case SELECT_CHAMPION:
            return action.payload;
        default:
            return selectedChampion;
    }
}

// export default (state = INITIAL_STATE, action) => {
//     console.log("reducers");
//     console.log(state);
//     console.log(action);
//     switch (action.type) {
//         case GET_CHAMPION:
//             console.log("getchamp");
//             return {...state, selectedChampion: state.championList[action.payload]}
//         default:
//             return state;
//     }
// };