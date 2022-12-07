// import { useState, useEfffect } from "react"
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
// import ResultCard from "../ResultCard/ResultCard";
// import ResultsPage from "../ResultsPage/ResultsPage";
// import SingleResultPage from "../SingleResultPage/SingleResultPage";
// import FavoritesPage from "../FavoritesPage/FavoritesPage";
import './App.css';

const App = () => {
  // const [ restaurants, setRestaurants ] = useState([])

  return (
    <main className="page-container">
      <Nav />
      <LandingPage />
      {/* <SingleResultPage /> */}
      <Footer/>
    </main>
  )
}

export default App;
