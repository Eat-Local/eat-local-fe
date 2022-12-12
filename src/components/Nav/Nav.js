import { useState, useEffect, useRef } from 'react';
import Search from "../Search/Search";
import Login from "../Login/Login";
import { Link } from "react-router-dom"
import "./Nav.css";

const logo = require('../../assets/eatlocalicon.png');

const Nav = ( { business, setBusiness, location, setLocation, onSearch, 
              email, setEmail, getUser, user, loginError } ) => {
  const [openLogin, setOpenLogin] = useState(false);
  const ref = useRef(null);
  const loginRef = useRef();
  const greeting = user ? user.fname : "friend"

  const handleClick = (event) => {
    setOpenLogin(!openLogin);
  }

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target) || loginRef.current.contains(event.target)) {
        return;
      }
      setOpenLogin(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref])

  return(
    <>
      <nav className="main-nav" data-cy="navbar">
        <Link to="/">
          <img src={logo} alt="Eat Local logo, a green location marker with a bite taken out of it!" data-cy="logo"/>
        </Link>
        <Search
          business={business}
          setBusiness={setBusiness}
          location={location}
          setLocation={setLocation}
          onSearch={onSearch}
        />
        <div className="greeting-menu-container">
         <span className="greeting" data-cy="greeting">Hello, {greeting}!</span>
          <span className="menu" data-cy="menu"><Link to="/">Home</Link> | <span ref={loginRef} className="login" onClick={(event) => handleClick(event)}>Login</span> | <Link to="/favorites">Favorites</Link></span>
        </div>
      </nav>
      {openLogin && <div className="login-container" ref={ref}>
        <Login 
          // name={name}
          email={email}
          // setName={setName}
          setEmail={setEmail}
          getUser={getUser}
          loginError={loginError}
        />
        </div>
      }
    </>
  )
}

export default Nav