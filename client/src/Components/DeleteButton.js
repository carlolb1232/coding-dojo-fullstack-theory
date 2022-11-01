import axios from 'axios';
import React from 'react';
import { redirect } from 'react-router-dom';


const DeleteButton = (props) => {
  const { personId, succesCallback } = props;

  const deletePerson = e => {
    axios.delete(`http://localhost:8000/api/people/${personId}`)
      .then(res=>{
        succesCallback();
      })
  }


  return (
    <button onClick={deletePerson}>
      DEDLETE
    </button>
  );
}

export default DeleteButton;
