import React, { useState } from 'react'
import axios from 'axios';

export default function PersonForm(props) {

  const {onSubmitProp} = props

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: ""
  });

  const onChangeHandler = e => {
    const { value, name } = e.target
    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  // const onSubmitHandler = e => {
  //   e.preventDefault();
  //   const { firstName, lastName } = newUser;
  //   axios.post('http://localhost:8000/api/people',{
  //     firstName,
  //     lastName
  //   })
  //     .then(res=>console.log("Response", res))
  //     .catch(err=>console.log("Error", err))
  // }
  const onSubmitHandler = e => {
    e.preventDefault();
    const { firstName, lastName } = newUser;
    onSubmitProp({
      firstName,
      lastName
    })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label>First Name: </label>
        <input type="text" name='firstName' onChange={onChangeHandler}/>
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name='lastName' onChange={onChangeHandler}/>
      </div>
      <input type="submit" value="CREATE" />
    </form>
  )
}
