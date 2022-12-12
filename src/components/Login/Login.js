import { useState } from 'react';
import './Login.css';

const Login = ({ name, email, setName, setEmail, getUser, error }) => {
  const [ emailError, setEmailError ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.includes('@') && email.includes('.')) {
      getUser(email)
      setEmailError('');
    }
    setEmailError(`Please enter a valid email address.`);
  }

  return(
    <>
      <form>
        <input
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button onClick={(event) => handleSubmit(event)}>Login!</button>
      </form>
      {error && <span>{error}</span>}
      {emailError && <span>{emailError}</span>}
    </>
  )
}

export default Login;