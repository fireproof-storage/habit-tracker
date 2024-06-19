
This is a Habit Tracking app, built to showcase just how simple and easy it is to persist data locally with Fireproof! The main screen allows you to create new habits and keep track of how many times a day you engage in each habit. For Good Habits, the thresholds are minimums. They show up as green when you're above the limit, and yellow or red if you're not. Bad Habits are the reverse, the thresholds are maximums. They are green if you stay below, yellow or red if you don't. You can set the daily, weekly, and monthly thresholds when you create the habit. 

There is also a data screen, where you can view how the habits data gets stored in Fireproof. The app isn't perfect -- there are a few bugs and gaps in functionality. Notably, there is no way to delete habits currently, short of clearing local storage. By default, Fireproof uses the brower's local storage capabilities -- data will persist indefinitely, unless it's manually deleted or aged out of the cache. In Firefox, you can view the data by typing 'localStorage' into your browser's console, and delete it by typing 'localStorage.clear();'

To use it, you'll need a relatively recent copy of node. Then just clone the repo and in the base directory run these commands: 

`npm install`

then
- `npm start`
- or, if you prefer
   - `npm run build`
   - `serve -s build`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

TODO
========
- fix bugs in multi-day tracking, color coding
- store config in Fireproof, such as color thresholds
- enable deletion of habits
- enable editing of data 
- sync with a backend DB
- add an About page with info from README

created by Eric Jensen, @jnsnco  


----------------
# Unlock 'Data Anywhere' with Fireproof

This project was created using [Fireproof](https://fireproof.storage/), a realtime, local-first, zero setup, CRDT-enabled databse. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
