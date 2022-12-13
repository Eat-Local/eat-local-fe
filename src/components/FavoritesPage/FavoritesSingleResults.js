import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from 'react-icons/md';
import '../SingleResultPage/SingleResultPage.css';
import { Link } from 'react-router-dom'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const Marker = ({ text }) => <div>{text}</div>

const FavoritesSingleResults = ({business, user, deleteFavorite}) => {
  const { address, image, phone, rating, title, url, id, price, latitude, longitude } = business
  const formattedPhone = phone.replace(/[^\d]/g, '');
  const altText = `A photo describing ${title}'s business, provided by ${title}`
  console.log(business)

  const handleDelete = () => {
    deleteFavorite(parseInt(id), user);
  }

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 12
  }
  
  return (
    <div className='single-result-section'>
      <article className="single-result">
        <img className="business-photo" src={image} alt={altText} />
        <div className="information-container">
          <h1>{title}</h1>
          <p>{price}</p>
          <p>Rating: {rating}/5</p>
          <p>{address}</p>
          <a href={formattedPhone}>{phone}</a>
          <p>Check out {title}'s <a href={url} target="_blank" rel="noopener noreferrer">website</a>!</p>
        </div>
        <Link to='/favorites'> 
        <span onClick={handleDelete}><AiFillStar className="favorite-icon-active" /></span>
        </Link>
      </article>
        <div style={{ height: '30rem', width: '30rem' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Marker
              lat={latitude}
              lng={longitude}
              text={<MdLocationPin style={{
                fontSize: "30px",
                color: "#408021"
              }}
              />}
            />
          </GoogleMapReact>
        </div>
      </div>
  )
}

export default FavoritesSingleResults
