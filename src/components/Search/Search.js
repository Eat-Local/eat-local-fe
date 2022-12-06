import { useState } from 'react';
import "./Search.css"

const Search = () => {
  const [ zipcode, setZipcode ] = useState('');
  const [ business, setBusiness ] = useState('restaurant');

  return (
    <form>
      <label> 
        <input
          type="text"
          value={zipcode}
          name="zipcode"
          placeholder="Location: zipcode"
          onChange={(event) => setZipcode(event.target.value)}
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
    </form>
  )
}

export default Search