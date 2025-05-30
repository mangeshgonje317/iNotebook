import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {

  const context = useContext(noteContext);
  const{deleteNote} =context;
  // const{editNote} =context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-pencil mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
