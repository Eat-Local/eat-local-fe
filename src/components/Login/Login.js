import './Login.css';

const Login = ({ name, email, setName, setEmail, getUser}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
    getUser(email)
  }

  return(
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
  )
}

export default Login;