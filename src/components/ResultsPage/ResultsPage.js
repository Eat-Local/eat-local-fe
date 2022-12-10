import "./ResultsPage.css"
import React from 'react'
import ResultCard from "../ResultCard/ResultCard"

const ResultsPage = ({ results, user, addFavorite, deleteFavorite }) => {
  const businessCards = results.map((business) => {
    const { id } = business;
    const { title, rating, img, is_closed, alias  } = business.attributes;
    console.log('this is img, assigned to photo: ', img)
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
      />
    )
  })
  return (
    <section className="results-section">
      <div className="results-container">
        {businessCards}
      </div>
    </section>
  )
}

export default ResultsPage
