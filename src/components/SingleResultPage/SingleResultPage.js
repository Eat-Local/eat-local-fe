import "./SingleResultPage.css";
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import eatLocalIcon from '../../assets/eatlocalicon.png'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const Marker = ({ text }) => <div>{text}</div>

const SingleResultPage = ({ business, user, addFavorite, deleteFavorite }) => {
  const { img, display_phone, rating, site, title, price, coordinates, display_address } = business.attributes;
  const phone = display_phone.replace(/[^\d]/g, '');
  const address = display_address.display_address.map((element) => `${element} `)
  const altText = `A photo describing ${title}'s business, provided by ${title}`
  let isfavorite = false;
  
  if (user) {
  user.favorites.forEach(fav => {
    if (fav.title === title) {
      isfavorite = true
    }
  })
  }

  const workingImg = img ? img : eatLocalIcon

  const findFavorite = () => {
    // eslint-disable-next-line array-callback-return
    return user.favorites.find(favoriteBiz => {
      if (favoriteBiz.title === title) {
        return favoriteBiz
      }
        })
  }
  
  const handleDelete = () => {
    deleteFavorite(parseInt(findFavorite().id), user);
    isfavorite = false
  }

  const handleAdd = () => {
    addFavorite(business, user)
    isfavorite = true
  }

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
        <img className="business-photo" src={workingImg} alt={altText} />
        <div className="information-container">
          <div className="single-title-container">
          <h1 className="single-title">{title}</h1>
          <div className="single-rating-container">
            <AiFillStar/>
            <p className="single-rating">{rating} / 5</p>
          </div>
          </div>
          <p className="single-price">Is it expensive? {price}</p>
          <p className="single-address">{address}</p>
          <a className="phone" href={phone}>{display_phone}</a>
          <p className="link-to">Check out {title}'s <a className="website-url" href={site} target="_blank" rel="noopener noreferrer">reviews</a> at this other website that is nothing like Eat Local!</p>
        </div>
        {(!isfavorite && user) && <button data-cy="unfavorited" onClick={handleAdd} className="favorite-icon"><AiOutlineStar className="favorite-icon"/></button>}
        {(isfavorite && user) && <button onClick={handleDelete} className="favorite-icon-active"><AiFillStar  className="favorite-icon-active"/></button>}
      </article>
      <div style={{ height: '30rem', width: '30rem' }}>
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