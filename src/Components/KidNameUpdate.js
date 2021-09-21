import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';

function KidNameUpdate( { detail }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [chores, setChores] = useState([]);
  const [homework, setHomework] = useState([]);
  const [recreational, setRecreational] = useState([])

  const history = useHistory();
  const { id } = useParams();


  const kidDetails = async () => {
    const { data } = await axios.get(
      `https://parenting-v3.herokuapp.com/kids/${id}`
    );
    console.log(data)
    setName(data.name);
    setImage(data.image);
    setChores(data.chores)
    setHomework(data.homework)
    setRecreational(data.recreational)
    
  };
 

  useEffect(() => {
    kidDetails();
  }, []);

  const UpdateKid = async () => {
    let formField = new FormData();
    formField.append('name', name);
    formField.append('chores', chores);
    formField.append('homework', homework);
    formField.append('recreational', recreational);
    if (image !== null ){
      formField.append('image', image);
    }
    await axios({
      method: 'PUT',
      url: `https://parenting-v3.herokuapp.com/kids/${id}`,
      data: formField,
    }).then((res) => {
      console.log(res.data);
      history.push('/');
    });
  };

  return (
    <div
      style={{ fontFamily: 'serif', backgroundColor: 'lightgray' }}
      className="py-5 text-center container"
    >
      <Form>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            className="text-center container"
            controlId="validationCustom01"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Update Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <img src={image} height="300" width="250" />
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="text-center container"
          >
            <Form.Label>Update Image</Form.Label>
            <Form.Control
              className="form-control form-control-lg"
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="text-center container"
          >
            <Form.Label>Chores</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={chores}
              placeholder="Update Chores"
              onChange={(e) => setChores(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="text-center container"
          >
            <Form.Label>Homework</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={homework}
              placeholder="Update Homework"
              onChange={(e) => setHomework(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="text-center container"
          >
            <Form.Label>After School Activities:</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={recreational}
              placeholder="Update Activities"
              onChange={(e) => setRecreational(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button
          style={{
            fontFamily: 'serif',
            backgroundColor: 'snow',
            color: 'gray',
            borderColor: 'peachpuff',
          }}
          onClick={UpdateKid}
        >
          Submit form
        </Button>
        <Link
          style={{
            fontFamily: 'serif',
            backgroundColor: 'snow',
            color: 'gray',
            borderColor: 'peachpuff',
          }}
          className="btn btn-primary m-2"
          to={`/${id}`}
        >
          Go Back
        </Link>
      </Form>

      <div className="form-group">
        <div className="form-group">
        </div>
      </div>
    </div>
  );
}

export default KidNameUpdate;
