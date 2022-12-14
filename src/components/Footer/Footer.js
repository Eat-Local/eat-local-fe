import React from 'react';
import "./Footer.css";

const logo = require('../../assets/eatlocalicon.png');

const Footer = () => {
  return (
    <footer>
      <img src={logo} className="footer-logo" alt="Eat Local logo, a green location marker with a bite taken out of it!" />
      <div className="footer-container" data-cy="footer-container">
          <div className="frontend-container">
            <h3 className="frontenders"><a href="https://github.com/Eat-Local/eat-local-fe.git" target="_blank" rel="noopener noreferrer" >Front-End Team</a></h3>
            <p className="contributors"><a href="https://www.linkedin.com/in/anthonyshellman/" target="_blank" rel="noopener noreferrer">Anthony Shellman</a></p>
            <p className="contributors"><a href="https://www.linkedin.com/in/victoria-ashley-fields/" target="_blank" rel="noopener noreferrer">Victoria Fields</a></p>
            <p className="contributors"><a href="https://www.linkedin.com/in/cole-edwin-anthony/" target="_blank" rel="noopener noreferrer">Cole Anthony</a></p>
          </div>
          <div className="backend-container">
            <h3 className="backenders"><a href="https://github.com/Eat-Local/eat-local-be.git" target="_blank" rel="noopener noreferrer">Back-End Team</a></h3>
            <p className="contributors"><a href="https://www.linkedin.com/in/erik-riggs/" target="_blank" rel="noopener noreferrer">Erik Riggs</a></p>
            <p className="contributors"><a href="https://www.linkedin.com/in/kaelin-sleevi-2b5426196/" target="_blank" rel="noopener noreferrer">Kaelin Sleevi</a></p>
            <p className="contributors"><a href="https://www.linkedin.com/in/benjamin-randolph-43881a95/" target="_blank" rel="noopener noreferrer">Benjamin Randolph</a></p>
            <p className="contributors"><a href="https://www.linkedin.com/in/dominic-odonnell/" target="_blank" rel="noopener noreferrer">Dominic O'Donnell</a></p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
