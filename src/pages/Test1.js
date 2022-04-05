import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';

function Test1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  const checkLoginDetails = (e) => {
    e.preventDefault();
    const userValid = username === 'JohnDoe' && password === 'Password1234';
    setShowMessage(userValid);
    setShowError(!userValid);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showMessage && <div id="flash" style={{background: 'green', width:'300px', marginTop: '0px', position: 'absolute', top: '0'} }>
          <p>Access Granted</p>
        </div>}
        {showError && <div id="flash" style={{background: 'red', width:'300px', marginTop: '0px', position: 'absolute', top: '0'} }>
          <p>Access Denied</p>
        </div>}
        <form style={{display: 'flex', flexDirection: 'column'}}>
          <label>Username</label>
          <input value={username} id="username" onChange={(e) => setUsername(e.target.value)}></input>
          <label style={{marginTop: '10px'}}>Password</label>
          <input value={password} id="password" onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={checkLoginDetails} action={'submit'} style={{fontSize: '16px', padding: '5px', marginTop: '30px'}}>Login</button>
        </form>
      </header>
    </div>
  );
}

export default Test1;
