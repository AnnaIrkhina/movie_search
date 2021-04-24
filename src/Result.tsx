import React from 'react';
import {get} from 'lodash';
import './App.css'

import './App.css';

function Result(props:any) {
  const result = get(props, 'result', {});
  const title = get(result, 'title', "qqq");
  const id = get(result, 'id','-1');
  const imgPath = get(result, 'backdrop_path','');
  const imageURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
  console.log(result);
  return (
    <li key = {id}>
      <img src = {imageURL+imgPath} />
      {title}


    </li>
  );
}

export default Result;
