import React from 'react';
// import { bulma, mara, creamy } from './../img';
import creamy from '../img/creamy.jpg';
import mara from '../img/mara.jpg';
import bulma from '../img/bulma.jpg';



function Home() {
  return(
    <>
      <h1>home</h1>
      <img src={creamy} width="400px"></img>
      <img src={mara}width="400px"></img>
      <img src={bulma}width="400px"></img>
    </>
  )
}

export default Home;