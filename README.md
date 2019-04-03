# Cool Hands Couriers

## Table of Contents

+ [About This Application](#about-this-Application)
+ [Features](#Features)
+ [Technologies Used](#Technologies-Used)
+ [Team](#Team)

## About This Application

Quick Summary

+ View a live example here: [Live App](live link)

## Features
-
-

## Technologies Used
- Socket.io
- React
- Boostrap 4
- Node/Express
- Passport
- React FontAwesome

## Team

## File Structure
+ Database: MongoDB
  - db/index.js: main connection to the mongoDB
  - models: schemas for each collection that which serves a unique purpose.

+ Controllers:
  - Creates CRUD functions for schemas established in models folder

+ Server.js:
  - Loads mainly all the NPM packages installed from package.json
  - launches connection with MongoDB DB
  - Sets the port for local listening
  - Socket.io initial configuration
  - Main error handler (500)
  - Passport installation intialization
  - API Routes reference

+ Routes:
  - Index.js: establishes the API routes, authorization and additional API configurations such as details below.

  - API
    * authAPI.js: imports user model and passport. Has get, post, authentication for sign in, logout and sign up.Exported as 'router'.
    * Additional API references can be installed here. they must be referenced in the authAPI.js file and in the index.js file.

+ Passport:
  - NPM Passport configuration.

+ Client/build
  - Static: Elements to display when JS is not installed.

+ Client/public
  - Main index.html reference here with 'root'
  - Bootstrap CDN references here

+ Client/src
  - Index.js: Imports root from index.html from public file. Connects to the App.js file.
  - App.js:
    * Imports styling packages from NPM installed packages with package.json
    * Imports components (with their default component names listed) from the components file.
    * Imports specific components from installed npm packages
    * Establishes main components of the page and where they are placed together and then set as a default view when selected from their properties.
  - Components/Login:
    * Import react and any component called from react.
    * Import redirect component from react-router-dom
    * Extend a component called LoginForm and utilize passport
  - Components/NoMatch:
    * When an end user enters a page that is not found from our pages.
  - Components/Home.jsx:
    * Establish the home page.
  - Components/SignUpForm.jsx:
    * Establishes the sign up page with Passport
  - Components/Chat:
    * Chat feature! :)
