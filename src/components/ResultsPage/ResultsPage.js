import "./ResultsPage.css"
import { data } from "../../assets/mock-data"

import React from 'react'
import ResultCard from "../ResultCard/ResultCard"

const ResultsPage = () => {
  const businessCard = data.map((business, index) => {
    return (
      <ResultCard
        title={business.attributes.title}
        rating={business.attributes.rating}
        photo={business.attributes.img}
        key={index}
      />
    )
  })
  return (
    <section className="results-section">
      <div className="results-container">
        {businessCard}
      </div>
    </section>
  )
}

export default ResultsPage
