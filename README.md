# GoWeather

## Overview

[Live Site](https://anna-go-nimbly.herokuapp.com/#/)

A single-page weather application.
You enter a city. It gives you the weather.
Sleek and straightforward.

## Technologies

* React.JS
* JavaScript
* CSS3
* HTML5
* Express
* Babel

## Tasks (All Completed)

![Search](https://media.giphy.com/media/RMy60W37wvcKYvGzLi/giphy.gif)

1.  Build a UI for web browsers that takes a user input
2.  Make a callout to a 3rd party API with user input. (I chose to use https://www.metaweather.com/api/)
3.  Display the data in a nice way below the user input
4.  Deploy it to Heroku

## Bonus

1.  Animations galore! CSS is the best part of any project
2.  Responsive design
3.  Go Nimbly inspired color scheme and design. Does it look familiar?

## Design Decisions

![Splash Page](https://media.giphy.com/media/9JvdsMAO2xNic6xiL4/giphy.gif)

* A Splash Page with Hand Rolled Animations

  * A splash page was added for extra oomph
  * Please note: the hills of the splash page are intentionally two different colors to add more depth. They're Cubism inspired.

* Responsive Design

  * Media queries were based off of the way the content appeared on screen
    * this minimizes the need to add media queries for every device size

* Why Express?
  * After receiving a `No "Access-Control-Allow-Origin" header"` error, I made the Express back end to address the cross origin issue

## React Component Hierarchy

* < App />
  * < Splash />
    * < Header />
    * < Search />
      * < SearchError />
    * < Footer />
  * < WeatherCarousel />
    * < Header />
    * < Search />
      * < SearchError />
    * <Loading />
    * < Carousel />
      * < WeatherToday />
        * < WeatherGif />
      * < WeatherFuture />
        * < WeatherGif />
    * < Footer />

## Contact

annanoh7@gmail.com
