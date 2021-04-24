import React from 'react';
import './App.css';
import {get} from 'lodash';
import Result from './Result'

function SearchResults(props: any) {
    const results = get(props, 'results', []);
    console.log(results);
    return (

        <div className="App">
            <ul>

            {results.map((res:any)=> {
                return <Result result={res}/>
            })}
            </ul>
        </div>
    );
}

export default SearchResults;
