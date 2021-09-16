import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function AddKid( { task }) {

    const [name, setName] =useState("")
    const [image, setImage] = useState(null)
    const history = useHistory()

    const addKid = async () => {
        let formField = new FormData()

        formField.append('name', name)
        if(image !== null){
            formField.append('image',image)
        }
        await axios({
          method: 'post',
          url: 'http://localhost:8000/kids/',
          data: formField,
        }).then((response) => {
          console.log(response.data);
          history.push('/');
        });
    }
    return (
      <div className="container">
        <h1>Add Kid</h1>
        <div className="form-group py-5 text-center container">
          <div className="form-group py-5 text-center container">
            <input
              className="count-pill"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Add Kid Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <img src={image} height="300" width="250" />
            <div className="form-group py-5 text-center container">
              <input
                className="count-pill"
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="text-center container"></div>
            <button className="btn btn-success" onClick={addKid}>
              Add Kid
            </button>
            <Link className="btn btn-primary m-2" to={`/`}>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
}

export default AddKid
