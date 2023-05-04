import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import GiphyDisplay from './components/GiphyDisplay';

function App() {
  const [giphy, setGiphy] =useState(null)
  const apiKey = "jiWlONDlca71H1Qm2Zl9PRnUuLSsxZY8";

  const getGiphy = async (searchTerm) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);

    const data = await response.json();
    setGiphy(data)
  }
  

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form giphySearch={getGiphy} />
      <GiphyDisplay />
    </div>
  );
}

export default App;
