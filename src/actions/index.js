import { CHAMPION_FILTER_CHANGED } from '../constants';
// When the search string is updated, we create an action to update the search string
export const filterChampions = (filterString) => {
    return {
      type: CHAMPION_FILTER_CHANGED,
      payload: filterString
    };
};