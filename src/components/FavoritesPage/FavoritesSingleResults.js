import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from 'react-icons/md';
import '../SingleResultPage/SingleResultPage.css';
import { Link } from 'react-router-dom'
import eatLocalIcon from '../../assets/eatlocalicon.png'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const Marker = ({ text }) => <div>{text}</div>

const FavoritesSingleResults = ({business, user, deleteFavorite}) => {
  const { address, image, phone, rating, title, url, id, price, latitude, longitude } = business
  const formattedPhone = phone.replace(/[^\d]/g, '');
  const altText = `A photo describing ${title}'s business, provided by ${title}`

  const handleDelete = () => {
    deleteFavorite(parseInt(id), user);
  }

  const workingImg = image ? image : eatLocalIcon

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
      <img className="business-photo" src={workingImg} alt={altText} />
        <div className="information-container">
        <div className="single-title-container">
            <h1 className="single-title title-and-rating">{title}</h1>
            <AiFillStar className="single-rating title-and-rating star-space"/>
            <p className="single-rating title-and-rating">{rating} / 5</p>
          </div>
          <p className="single-price">Is it expensive? {price}</p>
          <p className="single-address">{address}</p>
          <a className="phone" href={formattedPhone}>{phone}</a>
          <p className="link-to">Check out {title}'s <a className="website-url" href={url} target="_blank" rel="noopener noreferrer">reviews</a> at this other website that is nothing like Eat Local!</p>
        </div>
        <Link to='/favorites'> 
        <span onClick={handleDelete}><AiFillStar className="favorite-icon-active" style={{fontSize: "25px"}}/></span>
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
