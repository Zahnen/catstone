import * as c from './ActionTypes';

export const requestFact = () => ({
  type: c.REQUEST_FACT
});

export const getFactSuccess = (fact) => ({
  type: c.GET_FACT_SUCCESS,
  fact
});

export const getFactFailure = (error) => ({
  type: c.GET_FACT_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestFact);
    return fetch(`https://catfact.ninja/fact`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getFactSuccess(jsonifiedResponse.fact));
      })
    .catch((error) => {
      dispatch(getFactFailure(error));
    });
  }
}

// export const makeFactCall = () => {
//   return dispatch => {
//     dispatch(requestFact);
//     return fetch(`https://catfact.ninja/fact`)
//       .then(response => response.json())
//       .then((jsonifiedResponse) => {
//         dispatch(getFactSuccess(jsonifiedResponse.fact));
//       })
//     .catch((error) => {
//       dispatch(getFactFailure(error));
//     });
//   }
// }

export const requestBreeds = () => ({
  type: c.REQUEST_BREEDS
});

export const getBreedsSuccess = (breeds) => ({
  type: c.GET_BREEDS_SUCCESS,
  breeds
});

export const getBreedsFailure = (error) => ({
  type: c.GET_BREEDS_FAILURE,
  error
});

export const makeBreedCall = () => {
  return dispatch => {
    dispatch(requestBreeds);
    return fetch(`https://catfact.ninja/breeds`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getFactSuccess(jsonifiedResponse.data[0].breed));
      })
    .catch((error) => {
      dispatch(getFactFailure(error));
    });
  }
}