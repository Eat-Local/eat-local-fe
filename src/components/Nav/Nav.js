import Search from "../Search/Search";
import { Link } from "react-router-dom"
import "./Nav.css";

const logo = require('../../assets/eatlocalicon.png');

const Nav = ( { business, setBusiness, location, setLocation, onSearch } ) => {
  return(
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
        <span className="menu">Login | Favorites</span>
      </div>
    </nav>
  )
}

export default Nav