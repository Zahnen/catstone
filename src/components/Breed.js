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
          <div className ="d-flex flex-row flex-wrap my-flex-container">
          {breeds.map((breed) => {
            return (
            <div className="card m-3" style={{width: "18rem"}} >
              <h2 className="card-header">{breed.breed}</h2>
              <div className="card-body">
                <ul>
                  <li>Country: {breed.country}</li>
                  <li>Origin: {breed.origin}</li>
                  <li>Coat: {breed.coat}</li>
                  <li>Pattern: {breed.pattern}</li>
                </ul>
              </div>
            </div>)
          })}
          </div>
        </>
      );
    }
  }


export default Breed;