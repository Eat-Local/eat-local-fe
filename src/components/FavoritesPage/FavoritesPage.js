import {useState} from 'react'

import "./FavoritesPage.css"

import React from 'react'

const FavoritesPage = () => {
  const [searchFavorites, setSearchFavorites] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH FAVORITES' 
          className='input' 
          value={searchFavorites} 
          onChange={(event) => setSearchFavorites(event.target.value)} 
          required/>
        <button disabled={searchFavorites.length<1} type='submit' className='submit' onClick={handleClick}>GO</button>
        </form>
      
    </div>
  )
}

export default FavoritesPage
