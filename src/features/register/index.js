import React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const  registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Registerlication/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    const data = await res.json();
    console.log(data);
   
  }
  return (
    <div className='container'>
     <form onSubmit={registerUser} className="form">
        <h1>User Register</h1>
      <TextField type="email" placeholder="Name" value={email} onChange={(e) => setEmail(e.target.value)} sx={{width: '100%' }} />
      <TextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{width: '100%' }} />
      <Button variant='contained' type="submit"value="Register">Register</Button>
     </form>
    </div>
  );
}

export default Register;
