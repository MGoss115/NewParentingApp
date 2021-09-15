import React, { useState }from 'react'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import UserAPI from '../api/UserAPI'

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
    <div>
      <Form onSubmit={handleLogin}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <input
          className="form-control text-muted"
          controlId="formBasicPassword"
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
  );
}

export default LoginPage;
