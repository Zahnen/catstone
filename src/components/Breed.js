import React, {useState} from 'react';
import {useFetch} from './useFetch';

const Breed = () => {

  const [clicked, updateClick] = useState(0);
  const { breeds } = useFetch(`https://catfact.ninja/breeds`, clicked);
  console.log(breeds);
    if(!breeds){
      return(
        <><p>Loading...</p></>
      );
    } else {
      return(
        <>
          {breeds.map((breed) => {
            return (
            <div>
              <ul>
                <li>{breed.breed}</li>
                <li>{breed.country}</li>
                <li>{breed.origin}</li>
                <li>{breed.coat}</li>
                <li>{breed.pattern}</li>
              </ul>
            </div>)
          })}
        </>
      );
    }
  }

export default Breed;