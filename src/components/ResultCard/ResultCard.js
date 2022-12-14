import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import "./ResultCard.css";
import eatLocalIcon from '../../assets/eatlocalicon.png'

const ResultCard = ({ title, photo, rating, id, alias, user, addFavorite, deleteFavorite, displayAddress, address, business, displayType }) => { 
  let inUserFavs = false;
  const cardAddress = displayAddress ? displayAddress.map((element) => `${element} `) : address;
  
  if (user) {
    inUserFavs = user.favorites.reduce((acc, favorite) => {
      if (favorite.title === title) {
        acc = true;
      }
      return acc;
    }, false)
  }

  const workingImg = photo ? photo : eatLocalIcon
  
  const handleDelete = () => {
    const currentFavorite = user.favorites.find(favorite => favorite.title === title)
    deleteFavorite(parseInt(currentFavorite.id), user);
  }

  let linkText;

  if (displayType === "featured") {
    linkText = `/featured/${alias}`
  } else if (displayType === "result") {
    linkText = `/results/${alias}`
  } else if (displayType === "favorite") {
    linkText = `/favorites/${id}`
  }

  const buttonTxt = inUserFavs ? <AiFillStar style={{fontSize: "25px"}} className="favorites" data-cy="filled-star"/> : <AiOutlineStar style={{fontSize: "25px"}} className="not-favorites" data-cy="outline-star"/>

  return (
    <article className="business-card" data-cy="business-card">
      <Link to={linkText}><img className="business-card-image" src={workingImg} alt={title}></img></Link>
      <div className="under-img">
      <p className="title">{title}</p>
      <p className="address">{cardAddress}</p>
      <div className="rating-container">
        <AiFillStar data-cy="filled-star" />
        <p>{rating} / 5</p>
      </div>
      </div>
      
      {user && <button className="add-from-card" onClick={inUserFavs ? handleDelete : () => addFavorite(business, user)}>{buttonTxt}</button>}
    </article>
  )
}

export default ResultCard