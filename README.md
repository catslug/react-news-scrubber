# react-news-scrubber
Single page react app that scrubs news articles from the New York Times!

View the [live site on Heroku](https://scraperoftimes.herokuapp.com/).

## User Story:
Scraper of Times is a single page app (SPA) that lets users search for articles from the New York Times by topic and, optionally, by a start 
and/or end year. The top 10 results are displayed underneath the search form, showing the title, byline, and publication date. 
Clicking on the title will redirect users to the New York Times where they can read the article. Optionally, users can
choose to save articles for later reading. Articles are saved persistently in a MongoDB database. Saved articles are automatically
loaded at the bottom of the home page, or are available on it's own page at /saved. 

## Technologies Used: 
  * React.js
  * Javascript
  * jQuery 
  * JSX
  * Materialize CSS
  * NodeJS
  * Express (Server) 
  * MongoDB (Persistent Storage) 
  * Mongoose (ORM) 
  * Heroku (Deployment)
