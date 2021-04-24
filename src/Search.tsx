import React from 'react';
import {get} from 'lodash';

import './App.css';

function Search(props:any) {
  const query = get(props, 'query','')
  console.log("query", query);
  //const {setQuery} = props;
  return (

    <div className="App">
    <input value = {query} onChange={(e)=>props.setQuery(e.target.value)} placeholder="Start enter search parameters"/>
    </div>
  );
}

export default Search;
