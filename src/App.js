import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import RouteComp from "./components/RouteComp";
import { addUser } from "./actions/userAction";

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
  const dispatch = useDispatch()

  useEffect(() => {
    const userLogged = localStorage.getItem("user")
    if (userLogged) {
      const findUser = users.find((user) => user.id === Number(userLogged))
      dispatch(addUser(findUser))
    }
  })

  return (
    <Router>
      <Navbar/>
      <RouteComp/>
    </Router>
  );
}

export default App;
