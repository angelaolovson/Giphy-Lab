import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import GiphyDisplay from './components/GiphyDisplay';

function App() {
  const [giphy, setGiphy] =useState(null)
  const apiKey = "jiWlONDlca71H1Qm2Zl9PRnUuLSsxZY8";

  const getGiphy = async (searchTerm) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);

    // https://api.giphy.com/v1/gifs/search?q=$cat&api_key=jiWlONDlca71H1Qm2Zl9PRnUuLSsxZY8

    const data = await response.json();
    setGiphy(data.data[2])
    // console.log(data)
  }
  
  useEffect(() => {
    getGiphy('cat')
    // the empty [] is a dependency array and when empty this code runs once when the component mounts
  }, [])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form giphySearch={getGiphy} />
      <GiphyDisplay giphy={giphy} />
    </div>
  );
}

export default App;
