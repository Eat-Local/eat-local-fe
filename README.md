<a name="readme-top"></a>

<!-- HEADER -->
<h1 align="center">Eat Local</h1>

<h3 align="center">Support your local businesses!</h3>

<h4 align="center"><a href="https://eatlocal.vercel.app/"><strong>Deploy Link</strong></a>* | <a href=""><strong>Explore The FE Docs »</strong></a> | <a href="https://github.com/Eat-Local/eat-local-be"><strong>Explore The BE Docs »</strong></a></h4>
<p align="center"><strong>*use this login email for access to user features:</strong> BillyB@fakeemail.com</h5>

<p></p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#features">Features</a>
        <ul>
            <li><a href="#extensions">Extensions</a>
            <li><a href="#reflections">Reflections</a>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
Are you looking to support local businesses? Look no further! This accessible application allows you to search by city, state, zipcode, the name of a business, and just about anything else to help you find restaurants, markets, and breweries local to your area. Click a business to learn more it, check out its location, and, as a logged in user, store and delete your favorites.
<br>

<h3 align="center">Wireframe:</h3>
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/103962335/207761546-c8cb3a28-005c-46cc-87cc-f0506be6d35f.png" alt="Eat Local's FE wireframe"></p>

<h3 align="center">Logged Out Searches:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/htllLTv1fFQLRIhyys/giphy.gif" alt="A gif preview of a logged out user searching for local breweries"></p>

<h3 align="center">Logged In Access To Favoriting/Unfavoriting:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/hsBQi849MJR186t9jt/giphy.gif" alt="A gif preview of user logging in and favoriting local businesses"></p>

<h3 align="center">Searching Favorites:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/dpiRUcvrDYDQiCVxAn/giphy.gif" alt="A gif preview of a logged in user searching through stored favorites"></p>

<br />
This group project was assigned during the final module of Turing's Front-End Engineering program, about 19-20 weeks into its students learning how to code, with an emphasis on collaboration between front- and back-end teams. The details of this project are outlined in <a href="https://mod4.turing.edu/projects/capstone/index.html">this</a> project spec.

### Built With
![React][React-shield]
![Apollo-GraphQL][Apollo-GraphQL-shield]
![JavaScript][JavaScript-shield]
![CSS][CSS-shield]
![HTML5][HTML-shield]
![Cypress][Cypress-shield]
![NPM][NPM-shield]
![Vercel][Vercel-shield]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone this repository to your local machine
- `cd` into the repository
- Make sure the necessary dependencies are installed on your local machine (`react-router-dom`, `cypress`, `apollo client`, `google-map-react`, `graphql`, `react-icons`, etc.)
- Once the necessary dependencies are installed, `cd` back into the parent of this repository
- Visit the <a href="https://github.com/Eat-Local/eat-local-be">BE repository</a>, clone it down as this repo's sibling on your local machine, and install necessary dependencies
- Run `npm start`, `cd` back to the FE repo, and run `npm start`
- Have fun!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Create new user functionality with user profiles
- [ ] Display recent search history for unique users
- [ ] Pagination for searches yeilding >10 results

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Consumes both RESTful and GraphQL APIs, built with CI/CD 
- Implements TDD with a robust Cypress suite featuring accessibility, error-handling, happy- and sad- path testing
- Creates a multi-page user experience from a single-page application with Router

### Extensions
See [issues](https://github.com/Eat-Local/eat-local-fe/issues)

### Reflections
<b>Wins:</b><br>
The FE team is most proud of our collaboration with the BE team. We learned so much about the value of JSON contracts, how to meaningfully shape data and response contents, and how to speak to our different codebases in a way that translates across the stack. We were also proud of implementing CI/CD alongside GitHub Projects and Issues for our asynchronous ticketing system.

<p>
<b>Challenges:</b><br>
The most challenging aspect of this project was integrating GraphQL. While we were grateful for the opporunity to learn a new technology, we were not able to reap GraphQL's benefits as much as we had hoped given the functionality and size of our application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<table align="center">
    <tr>
        <td align="center"> Anthony Shellman: <a href="https://github.com/Ant-Shell">GitHub</a> | <a href="https://www.linkedin.com/in/anthonyshellman/">LinkedIn</a></td>
        <td align="center"> Cole Anthony: <a href="https://github.com/coleanthony1990">GitHub</a> | <a href="https://www.linkedin.com/in/cole-edwin-anthony/">LinkedIn</a></td>
        <td align="center"> Victoria Fields: <a href="https://github.com/vfields">GitHub</a> | <a href="https://www.linkedin.com/in/victoria-ashley-fields/">LinkedIn</a></td>
    </tr>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/100455148?v=4" alt="Anthony Shellman GitHub"
 width="150" height="auto" /></td>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/103971359?v=4" alt="Cole Anthony GitHub"
 width="150" height="auto" /></td>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/103962335?v=4" alt="Victoria Fields GitHub"
 width="150" height="auto" /></td>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Apollo-GraphQL-shield]: https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql
[JavaScript-shield]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Vercel-shield]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
