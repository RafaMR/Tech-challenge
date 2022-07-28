import { Link } from 'react-router-dom';
import React from 'react';

const PhoneList = ({ phonesList }) => {
  return (
    <div className="phone-list">
      <ul>
        {phonesList.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
            <img
              src={`../src/images/${phone.imageFileName}`}
              //src={`../public/images/${phone.imageFileName}`}
              alt={phone.name}
            />
            <p>Price €:{phone.price} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
