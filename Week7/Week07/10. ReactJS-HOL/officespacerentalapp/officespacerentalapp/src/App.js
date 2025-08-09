 import React from 'react';
import './App.css';

import office1 from './img/office1.jpg';
import office2 from './img/office2.jpg';
import office3 from './img/office3.jpg';

function App() {
  const element = "Office Space";
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", Image: office1 },
    { Name: "Regus", Rent: 70000, Address: "Bangalore", Image: office2 },
    { Name: "WeWork", Rent: 45000, Address: "Hyderabad", Image: office3 },
  ];

  const getColor = (rent) => {
    return rent <= 60000 ? 'red' : 'green';
  };

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>

      <div className="card-container">
        {officeList.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item.Image}
              width="100%"
              height="150"
              alt="Office Space"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <h2>Name: {item.Name}</h2>
            <h3 style={{ color: getColor(item.Rent) }}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
