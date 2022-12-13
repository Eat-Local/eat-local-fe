import { useHistory } from "react-router-dom"
import "./Search.css"
import { FiSearch } from "react-icons/fi"

const Search = ( { business, setBusiness, location, setLocation, onSearch} ) => {
  const history = useHistory()

  const handleClick = (event) => {
    event.preventDefault();
    const query = location.toLowerCase();
    onSearch(business, query);
  }

  const handleNavigate = () => {
    history.push("/results")
  }

  return (
    <form className="search-bar" onSubmit={handleClick}>
      <div className="search">
        <label>  
          <input
            className="searchbar"
            type="text"
            value={location}
            name="zipcode"
            data-cy="search"
            placeholder="do your thing..."
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button className="submit" type="submit" data-cy="submit" onClick={handleNavigate}><FiSearch/></button>
      </div>
      <div className="radio-toolbar">
        <input
          type="radio"
          id="restaurant"
          name="business"
          value="family restaurant"
          checked={business === "family restaurant"}
          data-cy="restaurant-radio"
          onChange={(event) => setBusiness(event.target.value)}
        /> 
        <label htmlFor="restaurant">Restaurant</label>
        <input
          type="radio"
          name="business"
          id="market"
          value="farmers market"
          checked={business === "farmers market"}
          data-cy="market-radio"
          onChange={(event) => setBusiness(event.target.value)}
        /> 
        <label htmlFor="market">Market</label>
        <input
          type="radio"
          name="business"
          id="brewery"
          value="brewery"
          checked={business === "brewery"}
          data-cy="brewery-radio"
          onChange={(event) => setBusiness(event.target.value)}
        /> 
        <label htmlFor="brewery">Brewery</label>
      </div>
    </form>
  )
}

export default Search