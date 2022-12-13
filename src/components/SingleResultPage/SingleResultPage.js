import "./SingleResultPage.css";
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
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
        <img className="business-photo" src={img} alt={altText} />
        <div className="information-container">
          <h1 className="single-title">{title}</h1>
          <p className="address">{address}</p>
          <p>{price}</p>
          <div className="single-rating-container">
            <AiFillStar/>
            <p>{rating} / 5</p>
          </div>
          <a className="phone" href={phone}>{display_phone}</a>
          <p>Check out {title}'s <a className="website-url" href={site} target="_blank" rel="noopener noreferrer">reviews</a> at this other website that is nothing like Eat Local!</p>
        </div>
        {(!isfavorite && user) && <span onClick={handleAdd}><AiOutlineStar className="favorite-icon"/></span>}
        {(isfavorite && user) && <span onClick={handleDelete}><AiFillStar className="favorite-icon-active" /></span>}
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