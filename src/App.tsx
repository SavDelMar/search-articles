import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Filter from './Components/Filter';

export interface IBeer {
  name: string,
  id: string,
  tagline: string,
  image_url: string,
  description:  string
}

function App() {
  
  const [beers, setBeers] = useState([])
  let isLoaded: boolean = false;
  let keyWord: string;


  async function getArticles() {
    const callAPI = await fetch(`https://api.punkapi.com/v2/beers`)
    const data = await callAPI.json();
    setBeers(data)
    
  }

  getArticles()
  async function searchArticles(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const callAPI = await fetch(`https://api.punkapi.com/v2/beers`)
    const data = await callAPI.json();
    setBeers(data)
    console.log(keyWord)
  }

  return (
    <div className="App">
      <header className="App-header">
      <Filter searchArticles={searchArticles} getArticles={getArticles}/>
      </header>
      <Home isLoaded={isLoaded} beerItems={beers}/>
    </div>
  );
}

export default App;
