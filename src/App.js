import React from "react";
import { BrowserRouter as Router } from "react-router-dom"

const users = [
  {
    "id": 1,
    "username": "amar",
    "password": "amar123"
  },
  {
    "id": 2,
    "username": "akbar",
    "password": "akbar123"
  },
  {
    "id": 3,
    "username": "antony",
    "password": "antony123"
  },
  {
    "id": 4,
    "username": "john",
    "password": "john123"
  },
  {
    "id": 5,
    "username": "paul",
    "password": "paul123"
  }
]

localStorage.setItem("users", JSON.stringify(users))

const App = (props) => {
  return (
    <Router>
      Dishpoll
    </Router>
  );
}

export default App;
