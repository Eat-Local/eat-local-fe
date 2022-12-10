import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import "./ResultCard.css";

const ResultCard = ({title, photo, rating, id, alias}) => {
  return (
    <article className="business-card">
      <Link to={`/results/${alias}`}><img className="business-card-image" src={photo} alt={title}></img></Link>
      <p>{title}</p>
      <p>{rating}</p>
      <AiOutlineStar className="result-favorite-icon" />
    </article>
  )
}

export default ResultCard