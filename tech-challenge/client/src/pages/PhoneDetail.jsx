import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneDetail = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3010/phone/${id}`)
      .then((res) => setPhone(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="phone-detail">
      <h1>{phone.name}</h1>
      <img
        src={`../src/images/${phone.imageFileName}`}
        //src={`../public/images/${phone.imageFileName}`}
        alt={phone.name}
      />
      <p>Price €:{phone.price} </p>
      <p>{phone.description}</p>
      <Link to="/">Back to phones list</Link>
    </div>
  );
};

export default PhoneDetail;
