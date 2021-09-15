import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';


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
      <h1>{detail.name}'s Task</h1>
      <h4>Chores: {detail.chores}</h4>
      <h4>Homework: {detail.homework}</h4>
      <h4>After School Activities: {detail.recreational} </h4>
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
    </div>
  );
}

export default KidUpdate
