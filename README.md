# Getting Started with Project 12

## Pre-requisite
- Node : > v14.17.3
- Npm : > 8.4.0
- React: > 18.2.0
- React Router : > 6.4.4

## 1. Create a directory for the project

First, you need to create a directory for the project

## 2. Install the backend 

You can access to the backend and setup information there : 
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
You need to install it at the root of the project

## 3. Start the backend
You need to start the backend server as indicated in the previous link

## 4. Install the frontend 
prequirisite node v14.17.3
1) In the project directory, you have to clone this repo
2) Run `npm install` at the root of the frontend
3) fill the .env like that : 

`
API_URL='http://localhost:3000/'
ENVIRONMENT='development'
`

where `API_URL` port is where your backend server run
and `ENVIRONMENT` is `development` if you need to get mocked datas and `production` if you need to get API datas


## 5.Run the frontend server 
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
it can open in an another port if you launched the backend server first
The page will reload if you make edits.\
You will also see any lint errors in the console.


## (OPTIONAL) JSDOC

If you need the jsdoc you have to run `npm run docs`

it will generate html with the docs in the root of the project in a `docs` folder
