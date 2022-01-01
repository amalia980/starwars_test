import React from "react";
//import ReactDOM from "react";

const Modal = ({open, filmCharacters, onClose, film}) => {

    if(!open) return null

    //return ReactDOM.createPortal(
        return (
        <>
      <div>
      <h3>{film}</h3>
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