import {useState} from 'react'
import "./FavoritesPage.css"
import ResultCard from '../ResultCard/ResultCard'

const FavoritesPage = ({ user }) => {
  const [searchFavorites, setSearchFavorites] = useState('')
  let favorites;

  if (!user) {
    favorites = "You should log in"
  } else if (user.favorites.length === 0) {
    favorites = "You dont have any favorites yet"
  } else {
    favorites = user.favorites.map((business) => {
      const { id, title, rating, img, is_closed, alias} = business
      console.log(business)
      return (
      <ResultCard
        key={id}
        id={id}
        title={title}
        rating={rating}
        photo={img}
        isClosed={is_closed}
        alias={alias}
      />
      )
    })
  }

  const handleClick = (event) => {
    event.preventDefault()
  }



  return (
    <section className="favorites-section">
      {user && <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH FAVORITES' 
          className='input' 
          value={searchFavorites} 
          onChange={(event) => setSearchFavorites(event.target.value)} 
          required/>
        <button disabled={searchFavorites.length<1} type='submit' className='submit' onClick={(event) => handleClick(event)}>GO</button>
      </form>}
      {favorites}
    </section>
  )
}

export default FavoritesPage
