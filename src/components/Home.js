import React, { useState } from 'react';

export default function Home() {

    const API_KEY = '041f1966539ec8a6fa27643ecf32791b';
    // const [query, setQuery] = useState("");
    // const [results, setResults] = useState([]);

    // const onChange = (e) => {
    //     e.preventDefault();
    
    //     setQuery(e.target.value);
    
    //     fetch(
    //       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (!data.errors) {
    //           setResults(data.results);
    //         } else {
    //           setResults([]);
    //         }
    //       });
    //   };

    return (
        // <form className="d-flex nav-right">
        //     <input className="form-control me-2 input-sm" type="search" placeholder="Search" aria-label="Search" />
        //     <button className="btn btn-light btn-sm" type="submit">Search</button>
        // </form>
        <div className="container-md">
            <h1>Home</h1>
        </div>

        // {results.length > 0 && (
        //     <ul className="results">
        //       {results.map((movie) => (
        //         <li>
        //           {movie.title}
        //         </li>
        //       ))}
        //     </ul>
        //   )}
    )
}


