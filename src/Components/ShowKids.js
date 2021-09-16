import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import KidDetail from './KidDetail';
import KidUpdate from './KidUpdate';
import NavBarMenu from './NavBarMenu';



function ShowKids() {
 

    const [kid, setKid] = useState([])
    const history = useHistory()

    const getKids = async () => {
        const response = await axios.get('http://localhost:8000/kids/');
        console.log(response.data)
        setKid(response.data)
    }
    useEffect(()=> {
        getKids()
    }, [])
    console.log(kid)

     

   
    return (
      <div>
        {/* <NavBarMenu /> */}

        <section className="py-5 text-center container info">
          <div className="row py-lg-">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Parenting 3.0</h1>
              <p className="lead text-muted">
                Welcome to parenting 3.0! This app allows you to keep track of
                your kids daily activities such as: Homework, Chores, and Extra
                Curricular Activites. Check it out!
              </p>
              <p>
                <a
                  style={{ marginRight: '10px' }}
                  href="/addkid"
                  className="btn btn-secondary my-2"
                  to="/addkid"
                >
                  Add Kid
                </a>
                <a href="/login" className="btn btn-secondary">
                  Logout
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="kid-card-info py-5 text-center container ">
          {kid.map((kids, index) => (
            <Card style={{ width: '18rem' }}>
              {kids.image ? (
                <Card.Img
                  variant="top"
                  style={{ height: '20rem' }}
                  src={kids.image}
                />
              ) : null}
              <Card.Body>
                <Card.Title style={{ fontFamily: 'serif' }}>
                  {kids.name}
                </Card.Title>
                <Link
                  style={{
                    fontFamily: 'serif',
                    backgroundColor: 'linen',
                    color: 'gray',
                    borderColor: 'peachpuff',
                  }}
                  className="btn btn-primary m-2"
                  to={`/${kids.id}/`}
                >
                  View
                </Link>
              </Card.Body>
            </Card>
          ))}
        </section>
      </div>
    );
}

export default ShowKids
