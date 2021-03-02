import * as c from '../actions/ActionTypes';

const initialState = {
  errorBreeds: null,
  isLoadingBreeds: false,
  breeds: null
}

export default(state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_BREEDS:
      return Object.assign({}, state, {
        isLoadingBreeds: true
      });
    case c.GET_BREEDS_SUCCESS:
      return Object.assign({}, state, {
        isLoadingBreeds: false,
        breeds: action.breeds
      });
    case c.GET_BREEDS_FAILURE:
      return Object.assign({}, state, {
        isLoadingBreeds: false,
        errorBreeds: action.error
      });
    default:
      return state;
  }
};