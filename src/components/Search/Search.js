import { useHistory } from "react-router-dom"
import "./Search.css"

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
      <label> 
        <input
          type="text"
          value={location}
          name="zipcode"
          placeholder="Location"
          data-cy="search"
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          name="business"
          value="family restaurant"
          checked={business === "family restaurant"}
          data-cy="restaurant-radio"
          onChange={(event) => setBusiness(event.target.value)}
        /> Restaurant
      </label>
    <label>
      <input
          type="radio"
          name="business"
          value="farmers market"
          checked={business === "farmers market"}
          data-cy="market-radio"
          onChange={(event) => setBusiness(event.target.value)}
      /> Market
     </label>
     <label>
      <input
          type="radio"
          name="business"
          value="brewery"
          checked={business === "brewery"}
          data-cy="brewery-radio"
          onChange={(event) => setBusiness(event.target.value)}
      /> Brewery
     </label>
        <button type="submit" data-cy="submit" onClick={handleNavigate}>Search</button>
    </form>

  )
}

export default Search