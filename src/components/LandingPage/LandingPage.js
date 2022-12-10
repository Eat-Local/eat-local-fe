import ResultCard from "../ResultCard/ResultCard";
import "./LandingPage.css"

const LandingPage = ({ user, addFavorite, deleteFavorite, featured }) => {
  const featBusinesses = featured.map(business => {
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
      />
    )
   }
  )

  return(
    <section className="landing-section">
      <div className="overview-container">
        <span>
        Eat local was designed to exclusively support local businesses.  Unlike larger companies, small businesses do not have 
        the resources or the capital to survive without sales and support.  Approximately 1 out of 5 small businesses close their 
        doors permanently within their first year of business.  The odds of a small business failing increase more each year they are open–with a 
        failure rate of 66% after 10 years of business.  Although running a small business is very difficult, it is near impossible without 
        support. To continue to have diverse options to eat, drink, and shop, there needs to be an effort made to support these businesses or 
        your favorite neighborhood spots may not be around much longer.  Please eat local!
        </span>
      </div>
      <div className="featured-container">
        <p className="featured-businesses-msg">Featured Local Businesses:</p>
          <div className="featured-cards">
            {featBusinesses}
          </div>
      </div>
    </section>
  )

}

export default LandingPage