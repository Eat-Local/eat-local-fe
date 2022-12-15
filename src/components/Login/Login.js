import { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

const Login = ({ email, setEmail, getUser, loginError }) => {
  const [ emailError, setEmailError ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.includes('@') && email.includes('.')) {
      getUser(email)
      setEmail('');
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
      {loginError && <span data-cy="login-error">{loginError}</span>}
      {displayEmailErr && <span data-cy="email-error">{emailError}</span>}
    </>
  )
}

export default Login;

Login.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  getUser: PropTypes.func,
  loginError: PropTypes.string
}