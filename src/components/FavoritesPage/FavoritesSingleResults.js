import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';

const FavoritesSingleResults = (business, user, addFavorite, deleteFavorite) => {
  const { address, image, phone, rating, title, url } = business.business
  const formattedPhone = phone.replace(/[^\d]/g, '');
  const altText = `A photo describing ${title}'s business, provided by ${title}`
  return (
    <div>
      <article className="single-result">
        <img className="business-photo" src={image} alt={altText} />
        <div className="information-container">
          <h1>{title}</h1>
          <p>Rating: {rating}/5</p>
          <p>{address}</p>
          <a href={formattedPhone}>{phone}</a>
          <p>Check out {title}'s <a href={url} target="_blank" rel="noopener noreferrer">website</a>!</p>
        </div>
        <AiOutlineStar className="favorite-icon"/>
      </article>
      </div>
  )
}

export default FavoritesSingleResults
