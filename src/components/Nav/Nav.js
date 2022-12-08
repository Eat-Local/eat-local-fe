import { useState, useEffect, useRef } from 'react';
import Search from "../Search/Search";
import { Link } from "react-router-dom"
import "./Nav.css";

const logo = require('../../assets/eatlocalicon.png');

const Nav = ( { business, setBusiness, location, setLocation, onSearch } ) => {
  const [openLogin, setOpenLogin] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    setOpenLogin(!openLogin);
  }

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
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
      <nav className="main-nav">
        <Link to="/">
          <img src={logo} alt="Eat Local logo, a green location marker with a bite taken out of it!" />
        </Link>
        <Search
          business={business}
          setBusiness={setBusiness}
          location={location}
          setLocation={setLocation}
          onSearch={onSearch}
        />
        <div className="greeting-menu-container">
          <span className="greeting">Hello, username!</span>
          <span className="menu"><span onClick={(event) => handleClick(event)}>Login</span> | Favorites</span>
        </div>
      </nav>
      {openLogin && <div className="login-container" ref={ref}>I am Login</div>}
    </>
  )
}

export default Nav