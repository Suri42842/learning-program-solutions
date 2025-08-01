 import './App.css';
import GitClient from './GitClient';
import { useEffect, useState } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    GitClient.getRepositories('techiesyed').then(r => setRepositories(r.data));
  }, []);

  return (
    <div className="App">
      <h1>Git repositories of User - TechieSyed</h1>
      {repositories.map(r =>
        <p key={r.name}>{r.name}</p>
      )}
    </div>
  );
}

export default App;
