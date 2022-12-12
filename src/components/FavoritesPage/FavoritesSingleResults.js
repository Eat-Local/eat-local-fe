import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import '../SingleResultPage/SingleResultPage.css';
import { Link } from 'react-router-dom'

const FavoritesSingleResults = ({business, user, addFavorite, deleteFavorite}) => {
  const { address, image, phone, rating, title, url, id } = business
  const formattedPhone = phone.replace(/[^\d]/g, '');
  const altText = `A photo describing ${title}'s business, provided by ${title}`

  const handleDelete = () => {
    deleteFavorite(parseInt(id), user);
    
  }

console.log(business)
  return (
    <div className='single-result-section'>
      <article className="single-result">
        <img className="business-photo" src={image} alt={altText} />
        <div className="information-container">
          <h1>{title}</h1>
          <p>Rating: {rating}/5</p>
          <p>{address}</p>
          <a href={formattedPhone}>{phone}</a>
          <p>Check out {title}'s <a href={url} target="_blank" rel="noopener noreferrer">website</a>!</p>
        </div>
        <Link to='/favorites'> 
        <span onClick={handleDelete}><AiFillStar className="favorite-icon-active" /></span>
        </Link>
      </article>
      </div>
  )
}

export default FavoritesSingleResults
