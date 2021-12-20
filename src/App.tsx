import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Filter from './Components/Filter';
import {debounceTime, distinctUntilChanged, fromEvent, map, Observable} from 'rxjs';
import Mark from "mark.js";

export interface IBeer {
  name: string,
  id: string,
  tagline: string,
  image_url: string,
  description:  string
}
export interface IEvent {
  value: string
}

function App() {
  const [beers, setBeers] = useState([]);
  let keyWord: string = '';
    
    //const search: HTMLElement | null = document.getElementById('search')!;
    const stream$: Observable<string> = fromEvent(document, 'input').pipe(
      map((event) => {      
        const target = event.target as HTMLInputElement;
        let activeInput = target.value;
        return activeInput
      }),
      debounceTime(1000),
      distinctUntilChanged())
    stream$.subscribe(value => {
    console.log(value)
  })

  let isLoaded: boolean = false;


  async function getArticles() {
    const callAPI = await fetch(`https://api.punkapi.com/v2/beers`)
    const data = await callAPI.json();
    setBeers(data)
    
  }
  async function getArt() {
    const callAPI = await fetch(`https://api.punkapi.com/v2/beers`)
    const data = await callAPI.json();
    return data
    
  }
  if(beers.length === 0 && keyWord === '') {
    getArticles()
  } 
  function startType() {
    console.log('')
  }
  async function searchArticles(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    keyWord= e.target.value
    let filteredBeers = beers.filter((beer:IBeer) => beer.name.includes(keyWord) || beer.description.includes(keyWord))
    let markInstance = new Mark(document.querySelector(".beer-item"));
    markInstance.unmark({
      done: () => {
        markInstance.mark(keyWord);
      }}
      )
   console.log('fB' , filteredBeers)
   setBeers(filteredBeers)


  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="test">"csncna<mark>ffewfef</mark>"</div>
      <Filter searchArticles={searchArticles}/>
      </header>
      <Home isLoaded={isLoaded} beerItems={beers}/>
    </div>
  );
}

export default App;
