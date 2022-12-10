import {useState} from 'react'
import "./FavoritesPage.css"
import ResultCard from '../ResultCard/ResultCard'

const FavoritesPage = ({ user, deleteFavorite }) => {
  const [searchFavorites, setSearchFavorites] = useState('')
  
  let displaySearch = false;

  if (user && user.favorites.length > 0) {
    displaySearch = true;
  }

  let favorites;

  if (!user) {
    favorites = "You should log in"
  } else if (user.favorites.length === 0) {
    favorites = "You dont have any favorites yet"
  } else if (!searchFavorites) {
    favorites = user.favorites.map((favorite) => {
      const { id, title, rating, image, alias} = favorite;
      return (
        <ResultCard
          key={id}
          id={id}
          title={title}
          rating={rating}
          photo={image}
          alias={alias}
          user={user}
          deleteFavorite={deleteFavorite}
          displayType="favorite"
        />
      )
    })
  } else {
    const filteredFavorites = user.favorites.filter(favorite => favorite.title.toLowerCase().includes(searchFavorites.toLocaleLowerCase()));
    favorites = filteredFavorites.map((favorite) => {
      const { id, title, rating, image, alias} = favorite;
      return (
        <ResultCard
          key={id}
          id={id}
          title={title}
          rating={rating}
          photo={image}
          alias={alias}
          user={user}
          displayType="favorite"
        />
      )
    })
  }

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <section className="favorites-section">
      {displaySearch && <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH FAVORITES' 
          className='input' 
          value={searchFavorites} 
          onChange={(event) => setSearchFavorites(event.target.value)} 
          required/>
        {/* <button disabled={searchFavorites.length < 1} type='submit' className='submit' onClick={(event) => handleClick(event)}>GO</button> */}
      </form>}
      {favorites}
    </section>
  )
}

export default FavoritesPage
