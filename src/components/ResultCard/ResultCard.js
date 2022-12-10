import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import "./ResultCard.css";

const ResultCard = ({title, photo, rating, id, alias, user, addFavorite, deleteFavorite, business}) => { 
  let inUserFavs = false;
  
  if (user) {
    inUserFavs = user.favorites.reduce((acc, favorite) => {
      if (favorite.title === title) {
        acc = true;
      }
      return acc;
    }, false)
  }
  
  const handleDelete = () => {
    const currentFavorite = user.favorites.find(favorite => favorite.title === title)
    deleteFavorite(parseInt(currentFavorite.id));
  }

  const buttonTxt = inUserFavs ? 'delete from favorites' : 'add to favorites'

  return (
    <article className="business-card">
      <Link to={`/results/${alias}`}><img className="business-card-image" src={photo} alt={title}></img></Link>
      <p>{title}</p>
      <p>{rating}</p>
      {user && <button onClick={inUserFavs ? handleDelete : () => addFavorite(business, user.id)}>{buttonTxt}</button>}
    </article>
  )
}

export default ResultCard