import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import { Table } from 'react-bootstrap';


function KidUpdate() {

    const [detail, setDetail] = useState([])
    const { id } = useParams();
    const history = useHistory()

    const getDetails = async () => {
        const res = await axios.get(
          `https://parenting-v3.herokuapp.com/kids/${id}`
        );
        console.log(res.data)
        setDetail(res.data)
  }
    console.log(detail)

  useEffect(() => {
    getDetails()
  },[])

  const deleteKid = async (id) => {
    await axios.delete(`https://parenting-v3.herokuapp.com/kids/${id}`);
    history.push("/")
  }

  return (
    <div>
     
      <Table striped bordered hover style={{ fontFamily: 'serif' }}>
        <thead>
          <tr>
            <th>{detail.name}'s</th>
            <th>Chores</th>
            <th>Homework</th>
            <th>After School Activities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task</td>
            <td>{detail.chores}</td>
            <td>{detail.homework}</td>
            <td>{detail.recreational}</td>
          </tr>
        </tbody>
      </Table>
      <Link
        style={{
          fontFamily: 'serif',
          backgroundColor: 'snow',
          color: 'gray',
          borderColor: 'peachpuff',
        }}
        className="btn btn-primary m-2"
        to={`/${id}/update`}
      >
        Update
      </Link>
      <Link
        style={{
          fontFamily: 'serif',
          backgroundColor: 'snow',
          color: 'gray',
          borderColor: 'peachpuff',
        }}
        className="btn btn-danger m-2"
        onClick={() => deleteKid(detail.id)}
        to={`/`}
      >
        Delete
      </Link>
      <Link
        style={{
          fontFamily: 'serif',
          backgroundColor: 'snow',
          color: 'gray',
          borderColor: 'peachpuff',
        }}
        className="btn btn-primary m-2"
        to={`/`}
      >
        Go Back
      </Link>
    </div>
  );
}

export default KidUpdate
