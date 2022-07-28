import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import PhonesList from './pages/PhonesList';
import PhoneDetail from './pages/PhoneDetail';

const App = () => {
  const [phonesList, setPhonesList] = useState([]);

  useEffect(() => {
    axios
      .get(' http://localhost:3010/phone')
      //.get(`${process.env.REACT_APP_SERVER_URL}/phone`)
      .then((res) => setPhonesList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhonesList phonesList={phonesList} />} />
        <Route path="/phone/:id" element={<PhoneDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
