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
        const res = await  axios.get(`http://localhost:8000/kids/${id}`)
        console.log(res.data)
        setDetail(res.data)
  }
    console.log(detail)

  useEffect(() => {
    getDetails()
  },[])

  const deleteKid = async (id) => {
    await axios.delete(`http://localhost:8000/kids/${id}`);
    // history.push("/")
  }

  return (
    <div>
      {/* <h1>{detail.name}'s Task</h1>
      <h4>Chores: {detail.chores}</h4>
      <h4>Homework: {detail.homework}</h4>
      <h4>After School Activities: {detail.recreational} </h4> */}
      <Table striped bordered hover>
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
      <Link className="btn btn-primary m-2" to={`/${id}/update`}>
        Update
      </Link>
      <Link
        className="btn btn-danger m-2"
        onClick={() => deleteKid(detail.id)}
        to={`/`}
      >
        Delete
      </Link>
      <Link className="btn btn-primary m-2" to={`/`}>
        Go Back
      </Link>
    </div>
  );
}

export default KidUpdate
