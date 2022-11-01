import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonForm from '../Components/PersonForm';
import PersonList from '../Components/PersonList';
import { simpleGet } from '../Services/simpleGet';

export default function Main() {

  const [message, setMessage] = useState("..Cargando");
  const [people, setPeople] = useState([]);

  const getMessageFromService = async () => {
    const messageFromService = await simpleGet("http://localhost:8000/api");
    setMessage(messageFromService.data.message);
  }

  const getPeopleFromService = async () => {
    const peopleFromService = await simpleGet("http://localhost:8000/api/people");
    setPeople(peopleFromService.data)
  }

  const removeFromDom = personId => {
    setPeople(people.filter(person=>person._id !== personId))
  }


  useEffect(() => {
    getMessageFromService();
    getPeopleFromService();
  }, []);

  const createPerson = (person) => {
    axios.post('http://localhost:8000/api/people', person)
    .then(res=>{
      setPeople([...people, res.data]);
    })
  }

  return (
    <div>
      <h2>Mensaje: {message}</h2>
      <PersonForm onSubmitProp={createPerson} />
      <PersonList people={people} removeFromDom={removeFromDom}/>
    </div>
  )
}
