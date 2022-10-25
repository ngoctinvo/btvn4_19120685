import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const  registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    <div className="App">
     <h1>Register</h1>
     <form onSubmit={registerUser}>
      <input type="email" placeholder="Name" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="submit"value="Register" />
     </form>
    </div>
  );
}

export default App;
