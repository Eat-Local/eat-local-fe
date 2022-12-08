import './Login.css';

const Login = ({ name, email, setName, setEmail}) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

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
        <button>Login!</button>
    </form>
  )
}

export default Login;