import "./ResultsPage.css"
import React from 'react'
import ResultCard from "../ResultCard/ResultCard"
import PropTypes from 'prop-types';


const ResultsPage = ({ results, user, addFavorite, deleteFavorite, searchError }) => {
  const businessCards = results.map((business) => {
    const { id } = business;
    const { title, rating, img, alias, display_address  } = business.attributes;
   
    return (
      <ResultCard
        key={id}
        id={id}
        title={title}
        rating={rating}
        photo={img}
        alias={alias}
        user={user}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
        business={business}
        displayAddress={display_address.display_address}
        displayType="result"
      />
    )
  })
  return (
    <section className="results-section" data-cy="results-section">
      {searchError && <h2>{searchError}</h2>}
      <div className="results-container" data-cy="results-container">
        {businessCards}
      </div>
    </section>
  )
}

export default ResultsPage

ResultsPage.propTypes = {
  results: PropTypes.array.isRequired,
  user: PropTypes.object,
  addFavorite: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  searchError: PropTypes.string
}
