import "./ResultsPage.css"
import React from 'react'
import ResultCard from "../ResultCard/ResultCard"

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
    <section className="results-section">
      {searchError && <h2>{searchError}</h2>}
      <div className="results-container">
        {businessCards}
      </div>
    </section>
  )
}

export default ResultsPage
