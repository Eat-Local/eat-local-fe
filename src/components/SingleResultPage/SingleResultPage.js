import "./SingleResultPage.css";
import { data } from "../../assets/mock-data";

const SingleResultPage = () => {
  const { address, description, hours, img, phone, rating, site, title, type, wheelchair_accessible } = data[0].attributes;
  const accessibility = wheelchair_accessible ? "Yes" : "No";

  return(
    <section className="single-result-section">
      <article className="single-result">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{rating}</p>
        <p>{address}</p>
        <p>{hours}</p>
        <p>{phone}</p>
        <p>Wheelchair Accessible: {accessibility}</p>
        <p>Check out {title}'s <a href={site} target="_blank" rel="noopener noreferrer">website</a>!</p>
      </article>
    </section>
  )
}

export default SingleResultPage