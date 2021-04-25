import React from 'react';
import {get} from 'lodash';
import './App.css'

import './App.css';

function Result(props: any) {
    const result = get(props, 'result', {});
    const title = get(result, 'title', "qqq");
    const id = get(result, 'id', '-1');
    const imgPath = get(result, 'backdrop_path', '');
    const imageURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
    console.log(result);
    return (
        <li key={id}>
            <div className="result">
                <div className="result_img"><img src={imageURL + imgPath}/></div>
                <div className="result_topic">{title}</div>
            </div>
       </li>
    );
}

export default Result;
