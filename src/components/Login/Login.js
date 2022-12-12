import { useState } from 'react';
import './Login.css';

const Login = ({ email, setEmail, getUser, loginError }) => {
  const [ emailError, setEmailError ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.includes('@') && email.includes('.')) {
      getUser(email)
      setEmailError('');
    } else {
      setEmailError(`Please enter a valid email address.`);
    }
  }

  let displayEmailErr = false;
  if (emailError && !loginError) {
    displayEmailErr = true;
  }

  return(
    <>
      <form className='login-form'>
        {/* <input
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          /> */}
          <input
            type="text"
            className='input-email'
            value={email}
            name="email"
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="login-btn" onClick={(event) => handleSubmit(event)}>Login!</button>
      </form>
      {loginError && <span>{loginError}</span>}
      {displayEmailErr && <span>{emailError}</span>}
    </>
  )
}

export default Login;