import React, { useState } from 'react'; // Import the useState hook
import Form from './components/Form';

import './App.css';

function App() {

  const [member, setMember] = useState({ name: '', email: '', role: '' });
  //Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.


  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    setMember({ name: '', email: '', role: '' })
    console.log('New Member -->', member);
  }

  //Render your list of team members
  return (
    <div className="App">
      <h1>Signup Members: </h1>
      <Form member={member} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
}

export default App;
