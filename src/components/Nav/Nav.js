import { useEffect, useRef } from 'react';
import Search from "../Search/Search";
import Login from "../Login/Login";
import { NavLink, Link } from "react-router-dom"
import PropTypes from 'prop-types';
import "./Nav.css";

const logo = require('../../assets/eatlocalicon.png');

const Nav = ( { business, setBusiness, location, setLocation, onSearch, 
              email, setEmail, openLogin, setOpenLogin, getUser, user, loginError } ) => {
  const ref = useRef(null);
  const loginRef = useRef();
  const greeting = user ? user.fname : "Friend"

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
  }, [ref, setOpenLogin])

  return(
    <>
      <nav className="main-nav" data-cy="navbar">
        <Link to="/" style={{color: 'black'}}>
          <div className='logo-container'>
            <img src={logo} data-cy="logo" alt="Eat Local logo, a green location marker with a bite taken out of it!"/>
            <h2 className='logo-word'>Eat Local</h2>
          </div>
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
          <span className="menu" data-cy="menu"><NavLink exact to="/" className="inactive">Home</NavLink> | <span ref={loginRef} className="login" onClick={(event) => handleClick(event)}>Login</span> | <NavLink exact to="/favorites" className="inactive">Favorites</NavLink></span>
        </div>
      </nav>
      {openLogin && <div className="login-container" ref={ref}>
        <Login 
          email={email}
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

Nav.propTypes = {
  business: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  setBusiness: PropTypes.func.isRequired,
  location: PropTypes.string,
  setLocation: PropTypes.func,
  onSearch: PropTypes.func.isRequired,
  email: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  loginError: PropTypes.string
}