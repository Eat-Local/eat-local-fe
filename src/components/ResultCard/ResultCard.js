import "./ResultCard.css"

const ResultCard = ({title, photo, rating}) => {
  return (
    <article className="business-card">
      <img className="business-card-image" src={photo} alt={title}></img>
      <p>{title}</p>
      <p>{rating}</p>
    </article>
  )
}

export default ResultCard