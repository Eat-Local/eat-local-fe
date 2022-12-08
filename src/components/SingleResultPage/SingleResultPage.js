import "./SingleResultPage.css";
// import { data } from "../../assets/mock-data";

const placeholder = require('../../assets/eatlocalicon.png')

const SingleResultPage = ({ business }) => {
  const { hours, img, phone, rating, site, title } = business.attributes;
  const altText = `A photo describing ${title}'s business, provided by ${title}`
  // const accessibility = wheelchair_accessible ? "Yes" : "No";

  return(
    <section className="single-result-section">
      <article className="single-result">
        <img className="business-photo" src={img} alt={altText} />
        <div className="information-container">
          <h1>{title}</h1>
          {/* <p>{description}</p> */}
          <p>{rating}</p>
          {/* <p>{address}</p> */}
          <p>{hours}</p>
          <p>{phone}</p>
          {/* <p>Wheelchair Accessible: {accessibility}</p> */}
          <p>Check out {title}'s <a href={site} target="_blank" rel="noopener noreferrer">website</a>!</p>
        </div>
        <img className="favorite-icon" src={placeholder} alt="an outline of a star" />
      </article>
    </section>
  )
}

export default SingleResultPage