import {useState} from 'react'

import "./FavoritesPage.css"

import React from 'react'

const FavoritesPage = () => {
  const [searchFavorites, setSearchFavorites] = useState('')



  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <section className="favorites-section">
      <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH FAVORITES' 
          className='input' 
          value={searchFavorites} 
          onChange={(event) => setSearchFavorites(event.target.value)} 
          required/>
        <button disabled={searchFavorites.length<1} type='submit' className='submit' onClick={(event) => handleClick(event)}>GO</button>
        </form>
    </section>
  )
}

export default FavoritesPage
