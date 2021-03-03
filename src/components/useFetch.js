import {useState, useEffect} from 'react';

const initialState = {
  errorFact: null,
  fact: null,
  breeds: []
}

export const useFetch = (url, clicked) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // setState(state => ({fact: state.fact, breeds: state.breed}))
    fetch(url)
    .then(response => response.json())
    .then(jsonifiedResponse => {
      setState({ fact: jsonifiedResponse.fact, breeds: jsonifiedResponse.data});
    });
}, [clicked]);

  return state;
};