import React, {useState} from 'react';
import {useFetch} from './useFetch';

const Fact = () => {

  const [clicked, updateClick] = useState(0);
  const { fact } = useFetch(`https://catfact.ninja/fact`, clicked);

      return(
        <>
          <h5>Cat Facts</h5>
          <ul>
            <p>{!fact ? "loading..." : fact}</p>
            <button onClick={() => updateClick(c => c + 1)}>Another Fact pls</button>
          </ul>
        </>
      );
    }

export default Fact;