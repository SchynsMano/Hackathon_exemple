import React, { useEffect, useState } from 'react';
import './App.css';
import Connection from './Connection';
import { useNavigate } from 'react-router-dom';


function Acceuil() {
  const [value, setValue] = useState(true);
  const [data, setData] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch data from the Flask API on component mount
    fetch('http://127.0.0.1:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleButtonClick = () => {
    navigate('/Connection')
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Flask Example</h1>
        <p>Data from Flask: {data}</p>
        <Button onClick={handleButtonClick} value={value} />
        
      </header>
    </div>
  );
}

function Button({ value, onClick }) {
  return <button onClick={onClick}>{value ? 'Show Connection' : 'Show Accueil'}</button>;
}

export default Acceuil;


