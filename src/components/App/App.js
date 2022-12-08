import { useState } from "react"
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
// import ResultCard from "../ResultCard/ResultCard";
// import ResultsPage from "../ResultsPage/ResultsPage";
// import SingleResultPage from "../SingleResultPage/SingleResultPage";
// import FavoritesPage from "../FavoritesPage/FavoritesPage";
import './App.css';

const App = () => {
  // const [ restaurants, setRestaurants ] = useState([]);
  const [ location, setLocation ] = useState('');
  const [ business, setBusiness ] = useState('restaurant');
  const [ results, setResults ] = useState([]);

  const onSearch = (business, searchQuery) => {
    console.log(`https://throbbing-wood-3534.fly.dev/api/v1/business?business=${business}&location=${searchQuery}`);
    fetch(`https://throbbing-wood-3534.fly.dev/api/v1/business?business=${business}&location=${searchQuery}`,
      {
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
     })
      .then(data => data.json())
      .then(data => console.log(data))
  }

  return (
    <main className="page-container">
      <Nav
        location={location}
        setLocation={setLocation}
        business={business}
        setBusiness={setBusiness}
        onSearch={onSearch}
      />
      <LandingPage />
      {/* <SingleResultPage /> */}
      <Footer/>
    </main>
  )
}

export default App;
