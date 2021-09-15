import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
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

     

   
    return (
      <div>
        <NavBarMenu />
       
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Home Page</h1>
              <p class="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" class="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" class="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="kid-card-info">
          {kid.map((kids, index) => (
            <Card style={{ width: '18rem', borderRadius: '30px' }}>
              {kids.image ? (
                <Card.Img
                  variant="top"
                  style={{ height: '20rem' }}
                  src={kids.image}
                />
              ) : null}
              <Card.Body>
                <Card.Title>{kids.name}</Card.Title>
                <Link className="btn btn-primary m-2" to={`/${kids.id}/`}>
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
