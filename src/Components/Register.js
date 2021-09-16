import React, { useState }from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:8000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        setRedirect(true)
    }
    if(redirect){
        return <Redirect exact to="/login" />
    }
    
  return (
    <div style={{ textAlign: 'right' }}>
      <Link className="btn btn-primary m-2" to={`/login`}>
        Login
      </Link>
      <div className="py-5 text-center container">
        <Form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <input
            className="form-control text-muted"
            controlId="formBasicPassword"
            placeholder="Username"
            type="text"
            name="username"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Register
