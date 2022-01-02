import React from "react";
//import ReactDOM from "react";
import './Modal.css'

const Modal = ({open, filmCharacters, onClose, film, loading}) => {

    if(!open) return null

    //sort characters in alphabetical order
    filmCharacters.sort((a, b) => 
      a.name > b.name ? 1 : -1
    );

    //return ReactDOM.createPortal(
        return (
        <>
      <div className="popup">
      <h3>{film}</h3>
      {loading && (<hh>Loading...</hh>)}
        {filmCharacters.map((char) => (
            <div>
              <p>{char.name}</p>
            </div>
          ))}
          <button onClick={onClose} >Close</button>
      </div>
      
      </>
      //document.getElementById('portal')
    );
}

export default Modal;