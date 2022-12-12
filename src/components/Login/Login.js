import './Login.css';

const Login = ({ name, email, setName, setEmail, getUser}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    getUser(email)
  }

  return(
    <form>
      <input
          className='input-name'
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className='input-email'
          type="text"
          value={email}
          name="email"
          placeholder="Email address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={(event) => handleSubmit(event)}>Login!</button>
    </form>
  )
}

export default Login;