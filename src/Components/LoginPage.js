import React, { useState }from 'react'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import UserAPI from '../api/UserAPI'
import NavBarMenu from './NavBarMenu';

function LoginPage() {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault();
    let userObj = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    let response = await UserAPI.login(userObj);
    let data = await response.json();
    localStorage.setItem('token', data['token']);
    setUser(data['user']);
    setRedirect(true);
  };
  console.log(user)

  if (redirect) {
    return <Redirect exact to="/" />;
  }

  return (
    <div style={{ textAlign: 'right' }}>
      <Link className="btn btn-primary m-2" to={`/register`}>
        Register
      </Link>
      <div className="py-5 text-center container">
        <Form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>
          <input
            className="form-control text-muted"
            placeholder="Username"
            type="text"
            name="username"
            id="username"
          />

          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
