import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default function PersonList(props) {

  const { people, removeFromDom } = props;

  // const deletePerson = (personId) => {
  //   axios.delete(`http://localhost:8000/api/people/${personId}`)
  //     .then(res => {
  //       removeFromDom(personId)
  //     })
  // }

  return (
    <div>
      {
        people.map((person,idx)=>{
          return (
            <p key={idx}>
              <Link to={`/people/${person._id}`}>
                {person.lastName} {person.firstName} |
              </Link>
              {/* | <button onClick={(e)=>{deletePerson(person._id)}}>
                DELETE
              </button> */}
              | <DeleteButton personId={person._id}  succesCallback={()=>removeFromDom(person._id)}/>
            </p>
          )
        })
      }
    </div>
  )
}
