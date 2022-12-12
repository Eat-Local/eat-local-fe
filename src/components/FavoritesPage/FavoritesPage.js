import {useState} from 'react'
import "./FavoritesPage.css"
import ResultCard from '../ResultCard/ResultCard'

const FavoritesPage = ({ user, deleteFavorite }) => {
  const [searchFavorites, setSearchFavorites] = useState('')
  
  let displaySearch = false;

  if (user && user.favorites.length > 0) {
    displaySearch = true;
  }

  // if (!user) {
  //   favorites = "You should log in"
  // } else if (user.favorites.length === 0) {
  //   favorites = "You dont have any favorites yet"
  // } else if (!searchFavorites) {
  //   favorites = user.favorites.map((favorite) => {
  //     const { id, title, rating, image, alias} = favorite;
  //     return (
  //       <ResultCard
  //         key={id}
  //         id={id}
  //         title={title}
  //         rating={rating}
  //         photo={image}
  //         alias={alias}
  //         user={user}
  //         deleteFavorite={deleteFavorite}
  //         displayType="favorite"
  //       />
  //     )
  //   })
  // } else {
  //   const filteredFavorites = user.favorites.filter(favorite => favorite.title.toLowerCase().includes(searchFavorites.toLocaleLowerCase()));
  //   favorites = filteredFavorites.map((favorite) => {
  //     const { id, title, rating, image, alias} = favorite;
  //     return (
  //       <ResultCard
  //         key={id}
  //         id={id}
  //         title={title}
  //         rating={rating}
  //         photo={image}
  //         alias={alias}
  //         user={user}
  //         displayType="favorite"
  //       />
  //     )
  //   })
  // }

  const displayFavorites = (curUser, searchFavs) => {
    let display;
    if (!curUser) {
      return <h2>Log in to store your favorites!</h2>
    } else if (curUser.favorites.length === 0) {
      return <h2>You don't have any favorites yet</h2>
    } else if (!searchFavs) {
      display = user.favorites.map((favorite) => {
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
      return display;
    } else {
      const filteredFavorites = user.favorites.filter(favorite => favorite.title.toLowerCase().includes(searchFavorites.toLocaleLowerCase()));
      display = filteredFavorites.map((favorite) => {
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
          value={searchFavorites} 
          onChange={(event) => setSearchFavorites(event.target.value)} 
          required/>
      </form>}
      {favorites}
    </section>
  )
}

export default FavoritesPage
