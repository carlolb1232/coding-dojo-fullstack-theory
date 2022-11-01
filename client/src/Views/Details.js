import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { simpleGet } from '../Services/simpleGet';

export default function Details() {

  const { id } = useParams();
  const [person, setPerson] = useState({});
  
  const getPersonFromService = async () => {
    const personFromService = await simpleGet(`http://localhost:8000/api/people/${id}`)
    setPerson(personFromService.data);
  }

  useEffect(() => {
    getPersonFromService();
  }, []);
  return (
    <div>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <Link to={`/people/${person._id}/edit`}>
        Edit
      </Link>
    </div>
  )
}
