import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import "./ResultCard.css";

const ResultCard = ({title, photo, rating, id, alias, user, addFavorite, deleteFavorite, business}) => {
  const buttonTxt = 'add to favorites';
  
  // logic for user.favorites and whether or not it includes current card for btn display

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