import "./ResultCard.css"
import { Link } from "react-router-dom"

const ResultCard = ({title, photo, rating, id, alias}) => {
  return (
    <Link to={`/results/${alias}`}>
    <article className="business-card">
      <img className="business-card-image" src={photo} alt={title}></img>
      <p>{title}</p>
      <p>{rating}</p>
    </article>
    </Link>
  )
}

export default ResultCard