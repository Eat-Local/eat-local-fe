import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { gql } from '@apollo/client';
import { getBusiness } from '../../apiCalls.js';
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
import ResultsPage from "../ResultsPage/ResultsPage";
import SingleResultPage from "../SingleResultPage/SingleResultPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import FavoritesSingleResults from "../FavoritesPage/FavoritesSingleResults";
import './App.css';

const App = ({client}) => {
  const [ location, setLocation ] = useState('');
  const [ business, setBusiness ] = useState('family restaurant');
  const [ featured, setFeatured ] = useState([]);
  const [ results, setResults ] = useState([]);
  const [ email, setEmail ] = useState('');
  const [ user, setUser ] = useState(null);
  const [ featError, setFeatError ] = useState('');
  const [ searchError, setSearchError ] = useState('');
  const [ loginError, setLoginError ] = useState('');
  
  const genRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    Promise.all([getBusiness('family restaurant', 'denver'), getBusiness('farmers market', 'denver'), getBusiness('brewery', 'denver')])
      .then(data => {
          const randomFeatBusinesses = data.reduce((acc, business) => {
            const featBusiness = business.data[genRandomNum(0, business.data.length - 1)];
            acc.push(featBusiness);
            return acc;
        }, []) 
        setFeatured(randomFeatBusinesses);
        setFeatError('');
      })
      .catch(error => setFeatError(`Uh oh, that's a ${error.message} error. Something went wrong finding our featured local businesses. Please refresh or try again later!`))
  }, [])

  const onSearch = (business, searchQuery) => {
    getBusiness(business, searchQuery)
      .then(data => {
        setResults(data.data);
        setSearchError('');
      })
      .catch(error => setSearchError(`Uh oh, that's a ${error.message} error. We weren't able to find any local businesses in that area. Be sure to search by city, state, or zipcode and try again!`))
  }

  const getUser = (userEmail) => {
  client.query({
    query: gql`
      query getUsers {
        user(email: "${userEmail}") {
          fname
          lname
          email
          id
          favorites {
             id,
             title,
             venueType,
             address,
             rating,
             url,
             image,
             price,
             phone,
             latitude,
             longitude,
             userId
          }
        }
      }
    `,
  })
  .then((result) => {
    setUser(result.data.user);
    setLoginError('');
  })
  .catch(error => setLoginError(`Something went wrong logging you in! Try a different email address.`))
  }

  const addFavorite = (business, user) => {
    const { img, display_phone, rating, site, title, display_address, venue_type, coordinates, price} = business.attributes;
    const address = display_address.display_address.reduce((acc, element) => {
      if (element) {
        acc += ` ${element} `
      }
      return acc;
    }, ``)

    client.mutate({
      mutation: gql`
      mutation {
        createFavorite(input: {
                   title: "${title}",
                   venueType: "${venue_type}",
                   address: "${address}"
                   rating: "${rating}",
                   url: "${site}",
                   image: "${img}",
                   price: "${price}",
                   phone: "${display_phone}",
                   latitude: "${coordinates.latitude}",
                   longitude: "${coordinates.longitude}"
                   userId: "${user.id}"
                 }) {
                  user {
                    fname,
                    lname,
                    email,
                    id,
                    favorites {
                      id,
                      title,
                      venueType,
                      address,
                      rating,
                      url,
                      image,
                      price,
                      phone,
                      latitude,
                      longitude,
                      userId
                    }
                  }
                  errors
                 }
               }`
    })
    .then(res => setUser(res.data.createFavorite.user))
    .catch(error => alert(`Oops, that's a ${error.message}. We had trouble adding your favorite. Please try again later!`))
  }

  const deleteFavorite = (id, user) => {
    client.mutate({
      mutation: gql`
      mutation {
      destroyFavorite(input: {
                 id: ${id},
                 userId: ${parseInt(user.id)}
               }) {
                user {
                  fname,
                  lname,
                  email,
                  id,
                  favorites {
                    id,
                    title,
                    venueType,
                    address,
                    rating,
                    url,
                    image,
                    price,
                    phone,
                    latitude,
                    longitude,
                    userId
                  }
                }
                errors
               }
              }`
    })
    .then(res => setUser(res.data.destroyFavorite.user))
    .catch(error => alert(`Oops, that's a ${error.message}. We had trouble deleting your favorite. Please try again later!`))
  }

  return (
    <main className="page-container">
      <Nav
        location={location}
        setLocation={setLocation}
        business={business}
        setBusiness={setBusiness}
        onSearch={onSearch}
        email={email}
        setEmail={setEmail}
        getUser={getUser}
        user={user}
        loginError={loginError}
      />
      <Switch>
        <Route exact path="/">
          <LandingPage
            featured={featured}
            user={user}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            featError={featError}
          />
        </Route>
        <Route exact path="/featured/:alias" render={({ match })=> {
          const businessToRender = featured.find(business => business.attributes.alias === match.params.alias)
          return <SingleResultPage 
                    business={businessToRender}
                    user={user}
                    addFavorite={addFavorite}
                    deleteFavorite={deleteFavorite}
                 />
          }
         } 
        />
        <Route exact path="/results">
         <ResultsPage 
          results={results}
          user={user}
          addFavorite={addFavorite}
          deleteFavorite={deleteFavorite}
          searchError={searchError}
         />
        </Route>
        <Route exact path="/results/:alias" render={({ match })=> {
          const businessToRender = results.find(business => business.attributes.alias === match.params.alias)
          return <SingleResultPage 
                    business={businessToRender}
                    user={user}
                    addFavorite={addFavorite}
                    deleteFavorite={deleteFavorite}
                 />
          }
         } 
        />
        <Route exact path="/favorites">
          <FavoritesPage 
            user={user}
            deleteFavorite={deleteFavorite}
          />
        </Route>
        <Route exact path="/favorites/:id" render={({ match })=> {
          const businessToRender = user.favorites.find(business => business.id === match.params.id)
          return <FavoritesSingleResults
                    business={businessToRender}
                    user={user}
                    deleteFavorite={deleteFavorite}
                 />
          }
         } 
        />
      </Switch>
      <Footer/>
    </main>
  )
}

export default App;
