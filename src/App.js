import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Gif from './Gif';

function App() {
  const [gifData, setGifData] = useState('');
  const [gifTitle, setGifTitle] = useState('')

  const handleSubmit = search => {
    setGifTitle(search)
  };

  useEffect(() => {
    let apiKey = process.env.REACT_APP_GIPHY_API_KEY
    let gifUrl = `api.giphy.com/v1/gifs/random?tag=${gifTitle}&api_key=${apiKey}`;

    const makeApiCall = () => {
      fetch(gifUrl)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
          console.log(data)
          setGifData((data))
        });
    }
    makeApiCall()
  }, [gifTitle])

  return (
    <div className="App">
      <h1>Find a Gif Here </h1>
      <Form handleSubmit={handleSubmit} />
      {gifData && <Gif gif={gifData} />}
    </div>
  );
}

export default App;
