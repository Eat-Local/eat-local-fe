import "./SingleResultPage.css";
import GoogleMapReact from 'google-map-react';
import {MdLocationPin} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const Marker = ({ text }) => <div>{text}</div>

const SingleResultPage = ({ business }) => {
  const { img, display_phone, rating, site, title, price, coordinates, display_address } = business.attributes;
  const phone = display_phone.replace(/[^\d]/g, '');
  const address = display_address.display_address.map((element) => `${element} `)
  const altText = `A photo describing ${title}'s business, provided by ${title}`
  const defaultProps = {
    center: {
      lat: coordinates.latitude,
      lng: coordinates.longitude
    },
    zoom: 12
  }

  return(
    <section className="single-result-section">
      <article className="single-result">
        <img className="business-photo" src={img} alt={altText} />
        <div className="information-container">
          <h1>{title}</h1>
          {price}
          <p>Rating: {rating}/5</p>
          <p>{address}</p>
          <a href={phone}>{display_phone}</a>
          <p>Check out {title}'s <a href={site} target="_blank" rel="noopener noreferrer">website</a>!</p>
        </div>
        <AiOutlineStar className="favorite-icon"/>
      </article>
      <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={coordinates.latitude}
          lng={coordinates.longitude}
          text={<MdLocationPin style={{
            fontSize: "30px",
             color: "#408021"
          }}
          />}
        />
      </GoogleMapReact>
    </div>
    </section>
  )
}

export default SingleResultPage