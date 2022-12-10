import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import "./ResultCard.css";

const ResultCard = ({title, photo, rating, id, alias, user, addFavorite, deleteFavorite, business}) => {
  const inUserFavs = user.favorites.reduce((acc, favorite) => {
    console.log('favorite.title in reduce: ', favorite.title)
    if (favorite.title === title) {
      acc = true;
    }
    return acc;
  }, false)
  
  const buttonTxt = inUserFavs ? 'delete from favorites' : 'add to favorites'

  const handleClick = (event) => {
    const userId = user.id;
    addFavorite(business, userId);
  }

  return (
    <article className="business-card">
      <Link to={`/results/${alias}`}><img className="business-card-image" src={photo} alt={title}></img></Link>
      <p>{title}</p>
      <p>{rating}</p>
      {user && <button onClick={(event) => handleClick(event)}>{buttonTxt}</button>}
    </article>
  )
}

export default ResultCard