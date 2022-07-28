import React from 'react';



const Note = ({note, handleClick}) => {
  return (
    <div>
      

        <li onClick={handleClick}> {note.content} <strong> {note.important ? 'important' : ''}</strong></li>



    </div>
  );
}

export default Note


