import {useState, useEffect} from 'react';

const initialState = {
  errorFact: null,
  fact: null,
}

export const useFetch = (url, clicked) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(state => ({fact: state.fact}))
    fetch(url)
    .then(response => response.json())
    .then(jsonifiedResponse => {
      setState({ fact: jsonifiedResponse.fact});
    });
}, [clicked]);

  return state;
};