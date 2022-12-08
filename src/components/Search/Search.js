import "./Search.css"

const Search = ( { business, setBusiness, location, setLocation, onSearch} ) => {
  // const [ location, setLocation ] = useState('');
  // const [ business, setBusiness ] = useState('restaurant');

  const handleClick = (event) => {
    event.preventDefault();
    const query = location.toLowerCase();
    onSearch(business, query);
  }

  return (
    <form className="search-bar">
      <label> 
        <input
          type="text"
          value={location}
          name="zipcode"
          placeholder="Location"
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          name="business"
          value="restaurant"
          checked={business === "restaurant"}
          onChange={(event) => setBusiness(event.target.value)}
        /> Restaurant
      </label>
    <label>
      <input
          type="radio"
          name="business"
          value="grocery"
          checked={business === "grocery"}
          onChange={(event) => setBusiness(event.target.value)}
      /> Grocery
     </label>
     <label>
      <input
          type="radio"
          name="business"
          value="brewery"
          checked={business === "brewery"}
          onChange={(event) => setBusiness(event.target.value)}
      /> Brewery
     </label>
     <button onClick={handleClick}>Search</button>
    </form>
  )
}

export default Search