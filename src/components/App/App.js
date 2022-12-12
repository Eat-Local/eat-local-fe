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
import './App.css';
import FavoritesSingleResults from "../FavoritesPage/FavoritesSingleResults.js";

const App = ({client}) => {
  const [ location, setLocation ] = useState('');
  const [ business, setBusiness ] = useState('family restaurant');
  const [ featured, setFeatured ] = useState([]);
  const [ results, setResults ] = useState([]);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ user, setUser ] = useState(null);
  
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
      })
      .catch(error => console.log('promise.all error: ', error))
  }, [])

  const onSearch = (business, searchQuery) => {
    getBusiness(business, searchQuery)
      .then(data => setResults(data.data))
      .catch(error => console.log('onSearch fetch error: ', error))
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
             phone,
             userId
          }
        }
      }
    `,
  })
  .then((result) => setUser(result.data.user))
  .catch(error => console.log('getUser error: ', error))
  }

  const addFavorite = (business, user) => {
    const { img, display_phone, rating, site, title, display_address, venue_type } = business.attributes;
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
                   phone: "${display_phone}",
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
                      phone,
                      userId
                    }
                  }
                  errors
                 }
               }`
    })
    .then(res => setUser(res.data.createFavorite.user))
    .catch(error => console.log('addFavorite error: ', error))
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
                    phone,
                    userId
                  }
                }
                errors
               }
              }`
    })
    .then(res => {
      console.log('deleteFav response: ', res)
      console.log('res.data.destroyFavorite.user ', res.data.destroyFavorite.user)
      setUser(res.data.destroyFavorite.user);
    })
    .catch(error => console.log('deleteFav error: ', error))
  }

  return (
    <main className="page-container">
      <Nav
        location={location}
        setLocation={setLocation}
        business={business}
        setBusiness={setBusiness}
        onSearch={onSearch}
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        getUser={getUser}
        user={user}
      />
      <Switch>
        <Route exact path="/">
          <LandingPage
            featured={featured}
            user={user}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
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
          // this is where we would mimic similar logic as the /results/:alias and /featured/:alias routes...
          // however, there is no alias in favorites, and I don't know how to change the params variable hahaha
          const businessToRender = user.favorites.find(business => business.id === match.params.id)
          return <FavoritesSingleResults
                    business={businessToRender}
                    user={user}
                    addFavorite={addFavorite}
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
