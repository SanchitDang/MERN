// Ract
// to start 'npm start'

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <h1> Register </h1>
      <form>
        <input type="text" placeholder='Name'> </input>
        <input type="email" placeholder='Eamil'> </input>
        <input type="password" placeholder='Password'> </input>
      </form>
    </div>
  );
}

export default App;
