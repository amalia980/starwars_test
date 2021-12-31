import React from "react";
//import ReactDOM from "react";

const Modal = ({open, filmCharacters, onClose}) => {

    if(!open) return null

    //return ReactDOM.createPortal(
        return (
        <>
      <div>
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