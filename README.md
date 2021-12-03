# DishPoll

DishPoll is a small react app for ranking dishes. Multiple users should be able to login into the app and vote for their favourite dishes and see the results of the poll.

---

### 🛠 Tech Stack

[![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Redux Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](#)
[![Javascript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)

#### Packages

material UI, react-router-dom, axios, formik, yup, react-redux, redux-thunk

---

### npm install

```
npm install
```

Install all the packages after downloading/cloning the repository to local system.

### npm start

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Demo

[![YouTube Icon](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=6XhaNTtY3UM) <br/>
Click the above icon to watch the video demo of DishPoll application on YouTube.

---

### Features

- Authentication.

  - User must login using username and password to verify their identity to use the application.
  - As there is no backend to get JWT (token), user ID is stored as token. Using this anytime the user reloads the page, store gets updated.
  - If the user enters incorrect username/password or it does not match with stored list of user, an error message is showed in the login page.

- Dish Module

  - Authenticated users can see all the avaliable dishes fetched from the API for them to vote.
  - Authenticated users can select their top 3 favorite dishes by giving them points (Rank 1 gets 30 points, Rank 2 gets 20, Rank 3 gets 10).
  - Selected dishes by the user can can seen on top of Dish page.
  - User can remove the selected dish by changing the dropdown value to None.
  - If user gives same point/rank to two dishes, the dish with latest value gets updated in My Dish section (Final dish with same value as other favourite is prefered).

- Poll Module.

  - Authenticated users can see all the votes given by other users. The dishes are displayed in order of descending order i.e, most votes to least votes.
  - The points given by the user for the dishes are displayed oin the final column.

- Login Alert

  - If a user tries to access any page without logging in, an alert message will be shown to login first.

- 404 Page
  - 404 Not Found Component added if user search url that doesn't exist.

---
