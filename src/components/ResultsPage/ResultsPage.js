import "./ResultsPage.css"
import React from 'react'
import ResultCard from "../ResultCard/ResultCard"

const ResultsPage = ({ results }) => {
  const businessCards = results.map((business) => {
    const { id } = business;
    const { title, rating, img, is_closed,  } = business.attributes;
    return (
      <ResultCard
        key={id}
        id={id}
        title={title}
        rating={rating}
        photo={img}
        isClosed={is_closed}
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
