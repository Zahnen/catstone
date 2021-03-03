import React, {useState} from 'react';
import {useFetch} from './useFetch';

const CatPics = () => {

  const [url, updateUrl] = useState(`https://api.thecatapi.com/v1/images/search?limit=100&${process.env.REACT_APP_API_KEY}`);
  const regularMode = `https://api.thecatapi.com/v1/images/search?limit=100&${process.env.REACT_APP_API_KEY}`
  const sunglassMode = `https://api.thecatapi.com/v1/images/search?category_ids=4&limit=100&${process.env.REACT_APP_API_KEY}`
  let { photos } = useFetch(url);

  function handleClick(url) {
    let photos= [];
    updateUrl(url);
  }

    if(!photos){
      return(
        <><p>Loading...</p></>
      );
    } else {
      return(
        <>
        { url === regularMode ? <button onClick={() => handleClick(sunglassMode)}>click for sunglass mode?</button> : <button onClick={() => handleClick(regularMode)}>click for regular mode?</button>}
          {photos.map((photo, index) =>{
            return (
              <div key={index}>
                <img src={photo.url} alt="A cat"/>
              </div>
            )
          })}
        </>
      );
    }
  }


export default CatPics;

