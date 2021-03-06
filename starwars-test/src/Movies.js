import React, {useState, useEffect} from 'react';
import Modal from './Modal';

const Movies = (props) => {
      //console.log(props);
  //console.log(props.film.people);

  const [characters, setCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  const fetchRequests = props.film.characters.map((url) =>
    fetch(url).then((res) => res.json())
  );

  //fetchRequests arrayen ser ut såhär -
  /*[
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json()),
    fetch("https://jsonplaceholder.typicode.com/todos/2").then((res) => res.json())
  ]*/

  useEffect(() => {
    setTimeout(() => {
      function getCharacters() {
        Promise.all(fetchRequests).then((res) => {
          setCharacters(res);
          setLoading(false);
        });
      }
    getCharacters();
  }, 3000)
  });


  //console.log("characters: ", characters);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        {props.film.title} | {props.film.release_date}
      </button>
      <Modal 
      film={props.film.title} 
      filmCharacters={characters} 
      open={isOpen} 
      onClose={() => setIsOpen(false)} 
      loading={loading} />
    </div>
  );
}

export default Movies;