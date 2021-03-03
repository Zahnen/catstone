import React, {useState} from 'react';
import {useFetch} from './useFetch';



const CatPics = () => {

  const [clicked, updateClick] = useState(0);
  const { photos } = useFetch(`https://api.thecatapi.com/v1/images/search?limit=100&${process.env.REACT_APP_API_KEY}`, clicked);
  console.log(photos);
    if(!photos){
      return(
        <><p>Loading...</p></>
      );
    } else {
      return(
        <>
          {photos.map((photo) => {
            return (
              <div>
                <img src={photo.url}/>
              </div>
            )
          })}
        </>
      );
    }
  }


export default CatPics;

