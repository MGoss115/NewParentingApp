import { React, useState, useEffect, Component } from 'react';
import './App.css';
import ShowKids from './Components/ShowKids';
import AddKid from './Components/AddKid';
import NavBarMenu from './Components/NavBarMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import KidDetail from './Components/KidDetail';
import KidUpdate from './Components/KidUpdate';
import KidNameUpdate from './Components/KidNameUpdate';
import LoginPage from './Components/LoginPage'
import UserAPI from './api/UserAPI'
import Register from './Components/Register';
import { Container } from 'react-bootstrap';



function App() {
 
  // const [user, setUser] = useState(null)
  
 
  
  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   let userObj = {
  //     username: e.target.username.value,
  //     password: e.target.password.value
  //   }
  //   let response = await UserAPI.login(userObj)
  //   console.log(response)
  //   let data = await response.json()
  //   localStorage.setItem("token", data["token"])
  //   setUser(data["user"])
  
  
  // }
  
  
  // const renderLoginPage = () => {
  //   return (
  //     <LoginPage
  //     handleLogin={handleLogin}
  //     />
  //   )
  // }  
  // console.log(user)
 
  return (
    <div>
  
      
     
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/addkid" component={AddKid} />
            <Route exact path="/" component={ShowKids} />
            <Route exact path="/:id/" component={KidDetail} />
            <Route exact path="/:id/update" component={KidNameUpdate} />
          </Switch>
        </Router>
    
    </div>
  );
}

export default App;
