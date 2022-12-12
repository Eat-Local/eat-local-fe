import "./ResultsPage.css"
import React from 'react'
import ResultCard from "../ResultCard/ResultCard"

const ResultsPage = ({ results, user, addFavorite, deleteFavorite, error, favError }) => {
  const businessCards = results.map((business) => {
    const { id } = business;
    const { title, rating, img, is_closed, alias  } = business.attributes;
   
    return (
      <ResultCard
        key={id}
        id={id}
        title={title}
        rating={rating}
        photo={img}
        isClosed={is_closed}
        alias={alias}
        user={user}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
        business={business}
        displayType="result"
        favError={favError}
      />
    )
  })
  return (
    <section className="results-section">
      {error && <h2>{error}</h2>}
      <div className="results-container">
        {businessCards}
      </div>
    </section>
  )
}

export default ResultsPage
