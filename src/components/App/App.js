import { useState } from "react"
import { Route, Switch } from "react-router-dom";
import { gql } from '@apollo/client';
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
// import ResultCard from "../ResultCard/ResultCard";
import ResultsPage from "../ResultsPage/ResultsPage";
import SingleResultPage from "../SingleResultPage/SingleResultPage";
// import FavoritesPage from "../FavoritesPage/FavoritesPage";
import './App.css';

const App = ({client}) => {
  const [ location, setLocation ] = useState('');
  const [ business, setBusiness ] = useState('family restaurant');
  // const [ featured, setFeatured ] = useState([]);
  const [ results, setResults ] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [user, setUser] = useState(null)
  

  // const genRandomNum = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }

  // useEffect(() => {
  //   fetch(`https://throbbing-wood-3534.fly.dev/api/v1/business?business=$restaurant&location=denver`)
  //     .then(data => data.json())
  //       // use random num gen and length of restaurants to find a random denv rest
  //       // set a first element in featured array
  //       // repeat this logic for brewery and grocery?
  //       // could add random logic for other locations if we felt inclined
  // }, [])

  const onSearch = (business, searchQuery) => {
    console.log(`https://throbbing-wood-3534.fly.dev/api/v1/business?business=${business}&location=${searchQuery}`);
    
    fetch(`https://throbbing-wood-3534.fly.dev/api/v1/business?business=${business}&location=${searchQuery}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oops, something went wrong trying to find businesses in your location. Try entering a different location!')
        } else {
          return res.json()
        }
      })
      .then(data => setResults(data.data))
      .catch(error => console.log(error))
  }

  const getUser = (userEmail) => {
  client.query({
    query: gql`
      query getUsers {
        user(email: "${userEmail}") {
          fname
          lname
          email
          favorites {
            title
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));
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
      />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/results">
         <ResultsPage 
          results={results}
         />
        </Route>
        <Route exact path="/results/:alias" render={({ match })=> {
          const businessToRender = results.find(business => business.attributes.alias === match.params.alias)
          console.log(businessToRender)
          return <SingleResultPage business={businessToRender}/>}
        } />
      </Switch>
      <Footer/>
    </main>
  )
}

export default App;
