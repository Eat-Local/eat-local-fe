import {useState} from 'react'
import "./FavoritesPage.css"
import ResultCard from '../ResultCard/ResultCard'

const FavoritesPage = ({ user, deleteFavorite }) => {
  const [searchFavorites, setSearchFavorites] = useState('')
  
  let displaySearch = false;

  if (user && user.favorites.length > 0) {
    displaySearch = true;
  }

  const displayFavorites = (curUser, searchFavs) => {
    let display;
    if (!curUser) {
      return <h2 data-cy="fav-user-message">Log in to store your favorites!</h2>
    } else if (curUser.favorites.length === 0) {
      return <h2 data-cy="fav-user-message">You don't have any favorites yet</h2>
    } else if (!searchFavs) {
      display = user.favorites.map((favorite) => {
        const { id, title, rating, image, alias, address } = favorite;
        return (
          <ResultCard
            key={id}
            id={id}
            title={title}
            rating={rating}
            photo={image}
            alias={alias}
            user={user}
            address={address}
            deleteFavorite={deleteFavorite}
            displayType="favorite"
          />
        )
      })
      return display;
    } else {
      const filteredFavorites = user.favorites.filter(favorite => favorite.title.toLowerCase().includes(searchFavorites.toLocaleLowerCase()));
      display = filteredFavorites.map((favorite) => {
        const { id, title, rating, image, alias, address} = favorite;
        return (
          <ResultCard
            key={id}
            id={id}
            title={title}
            rating={rating}
            photo={image}
            alias={alias}
            user={user}
            address={address}
            displayType="favorite"
          />
        )
      })
      return display;
    }
  }

  const favorites = displayFavorites(user, searchFavorites);

  return (
    <section className="favorites-section">
      {displaySearch && <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH FAVORITES' 
          className='input' 
          data-cy="fav-searchbar"
          value={searchFavorites} 
          onChange={(event) => setSearchFavorites(event.target.value)} 
          required/>
      </form>}
      <div className='favorites-container'>
      {favorites}
      </div>
    </section>
  )
}

export default FavoritesPage
