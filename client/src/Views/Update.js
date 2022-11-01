import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { simpleGet } from '../Services/simpleGet';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../Components/DeleteButton';
export default function Update(props) {
  
  const { id } = useParams();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [updatedPerson, setUpdatedPerson] = useState();

  const getPersonFromService = async () => {
    const personFromService = await simpleGet(`http://localhost:8000/api/people/${id}`);
    setFirstName(personFromService.data.firstName);
    setLastName(personFromService.data.lastName);
    setUpdatedPerson({
      firstName: personFromService.data.firstName,
      lastName:  personFromService.data.lastName
    })
  }

  useEffect(() => {
    getPersonFromService();
  }, []);

  const onChangeHandler = e => {
    const { value, name } = e.target
    setUpdatedPerson({
      ...updatedPerson,
      [name]: value
    })
  }

  const updatePerson = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/people/${id}`, updatedPerson)
      .then(res=>console.log(res));
  }



  return (
    <div>
      <h1>Update a Person</h1>
      <form onSubmit={updatePerson}>
        <div className="form-group">
          <label>First Name: </label>
          <input type="text" 
            name="firstName" 
            value={updatedPerson?.firstName} 
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Last Name: </label>
          <input 
            type="text" 
            name="lastName" 
            value={updatedPerson?.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" value="Actualizar" />
        <DeleteButton personId={id} succesCallback={()=>navigate("/people")}/>
      </form>
    </div>
  )
}
