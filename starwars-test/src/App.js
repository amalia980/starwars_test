import './App.css';
import Movies from './Movies.js'
import React, {useState, useEffect} from 'react';

function App() {
  
  // const films = [
  //   {
  //     id: 1,
  //     title: "A new hope",
  //     people: [
  //       "https://swapi.dev/api/people/1/",
  //       "https://swapi.dev/api/people/2/", 
  //       "https://swapi.dev/api/people/3/", 
  //       "https://swapi.dev/api/people/4/", 
  //       "https://swapi.dev/api/people/5/", 
  //       "https://swapi.dev/api/people/6/", 
  //       "https://swapi.dev/api/people/7/", 
  //       "https://swapi.dev/api/people/8/", 
  //       "https://swapi.dev/api/people/9/", 
  //       "https://swapi.dev/api/people/10/", 
  //       "https://swapi.dev/api/people/12/", 
  //       "https://swapi.dev/api/people/13/", 
  //       "https://swapi.dev/api/people/14/", 
  //       "https://swapi.dev/api/people/15/", 
  //       "https://swapi.dev/api/people/16/", 
  //       "https://swapi.dev/api/people/18/", 
  //       "https://swapi.dev/api/people/19/", 
  //       "https://swapi.dev/api/people/81/"
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "the empire strikes",
  //     people: [
  //       "https://swapi.dev/api/people/1/", 
  //               "https://swapi.dev/api/people/2/", 
  //               "https://swapi.dev/api/people/3/", 
  //               "https://swapi.dev/api/people/4/", 
  //               "https://swapi.dev/api/people/5/", 
  //               "https://swapi.dev/api/people/10/", 
  //               "https://swapi.dev/api/people/13/", 
  //               "https://swapi.dev/api/people/14/", 
  //               "https://swapi.dev/api/people/18/", 
  //               "https://swapi.dev/api/people/20/", 
  //               "https://swapi.dev/api/people/21/", 
  //               "https://swapi.dev/api/people/22/", 
  //               "https://swapi.dev/api/people/23/", 
  //               "https://swapi.dev/api/people/24/", 
  //               "https://swapi.dev/api/people/25/", 
  //               "https://swapi.dev/api/people/26/"
  //     ],
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function getMovies() {
        let res = await fetch("https://swapi.dev/api/films/");
        let data = await res.json();
        setMovies(data.results);
        setLoading(false)
      }
      getMovies();
    }, 3000)
  }, []);

  
  return (
    <div className="App">
      <h1>Star wars test</h1>
      {loading && (<h2>Loading...</h2>)}
      {movies.map((film) => (
        <Movies key={film.id} film={film} />
      ))}
    </div>
  );
}

export default App;
