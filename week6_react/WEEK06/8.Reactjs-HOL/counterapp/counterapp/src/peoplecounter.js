import React, { useState } from 'react';

function PeopleCounter() {
  const [entryCount, setEntryCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);

  const handleLogin = () => {
    setEntryCount(entryCount + 1);
  };

  const handleExit = () => {
    setExitCount(exitCount + 1);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{ marginRight: '100px' }}>
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
        <span style={textStyle}>{entryCount} People Entered!!!</span>
      </div>
      <div>
        <button onClick={handleExit} style={buttonStyle}>Exit</button>
        <span style={textStyle}>{exitCount} People Left!!!</span>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: '1px solid green',
  padding: '5px 10px',
  marginRight: '10px',
  cursor: 'pointer',
  borderRadius: '4px'
};

const textStyle = {
  fontWeight: 'bold',
  color: '#333',
};

export default PeopleCounter;
