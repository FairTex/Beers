export const ADD_FAVORITE = 'ADD_FAVORITE';
export const ADD_BEER = 'ADD_BEER';

export function addBeer(beer) {
  return {
    type: ADD_BEER,
    beer
  };
}

export function addFavorite(beer) {
  return {
    type: ADD_FAVORITE,
    beer
  };
}
