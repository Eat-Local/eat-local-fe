import ResultCard from "../ResultCard/ResultCard";
import "./LandingPage.css"

const LandingPage = () => {
  return(
    <section className="landing-section">
      <div className="overview-container">
        <p>
          Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown<br/>gastropub cornhole celiac swag.
          Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard<br/>pour-over blog tumblr humblebrag.
          Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.
        </p>
      </div>
      <div className="featured-container">
        <p className="featured-businesses-msg">Featured Local Businesses:</p>
          <div className="featured-cards">
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
      </div>
    </section>
  )

}

export default LandingPage