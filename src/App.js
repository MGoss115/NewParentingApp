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

  const [user, setUser] = useState('')

//     const getUser = async (token) => {
     

//       await fetch('http://localhost:8000/current_user/', {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(token)
//       }).then((response) => {
//           console.log(response)
//       )}
    
// }   
   
 

 
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
