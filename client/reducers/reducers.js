
import {
    ADD_BEER,
    ADD_FAVORITE
} from 'actions';

import {
    initialStore
} from './defaults';

export default function (state = initialStore, action) {
    switch (action.type) {
        case ADD_BEER:
            return {
                beers: state.beers.concat(action.beer),
                favoriteBeers: state.favoriteBeers
            };
        case ADD_FAVORITE:
            return {
                beers: state.beers,
                favoriteBeers: state.favoriteBeers.concat(action.beer)
            };
        default:
            return state;
    }
};