import React, {useEffect, useState} from 'react';

import './App.css';
import Search from "./Search";
import SearchResults from "./SearchResults";
import axios from "axios";

function App() {
    const URL = 'https://api.themoviedb.org/3/search/movie';
    const [query, setQuery] = useState('');

     const [resultJSON, setResulJSON] = useState({data:{results:[]}})
    useEffect(() => {
        axios.get(URL, {
            params: {
                api_key: "d3d2e3261fa9b4aff72b9f65f45d26ce",
                language: "en-US",
                page:1,
                include_adult: "false",
                query: query,

            },
        })
            .then(responce => setResulJSON(responce))
            .catch(error => console.log(error))


    }, [query])
    return (

        <div className="App-header">

            <Search query = {query} setQuery = {setQuery}/>
            <SearchResults results={resultJSON.data.results}/>
        </div>
    );
}

export default App;
