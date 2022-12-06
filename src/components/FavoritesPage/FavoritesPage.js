import {useState} from 'react'

import "./FavoritesPage.css"

import React from 'react'

const FavoritesPage = () => {
  const [searchFavorites, setSearchFavorites] = useState('')

  const handleChange = (event) => {
    const result = event.target.value
    setSearchFavorites(result)
  }

  return (
    <div>
      <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH FAVORITES' 
          className='input' 
          value={searchFavorites} 
          onChange={handleChange} 
          required/>
        <button disabled={searchFavorites.length<1} type='submit' className='submit'>GO</button>
        </form>
      
    </div>
  )
}

export default FavoritesPage
