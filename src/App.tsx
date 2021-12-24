import React, { ChangeEvent, ChangeEventHandler, useEffect, useState, FunctionComponent } from 'react';
import './App.css';
import Home from './Components/Home';
import { setBeersAction } from './redux/beersAction';
import { useDispatch, useSelector } from 'react-redux';
import FullArticle from './Components/fullArticle';
import { Route, Routes } from 'react-router-dom';
import { AppState } from './redux/rootReducer';

export type BeerItem = {
  name: string,
  id: number,
  tagline: string,
  image_url: string,
  description: string,
  abv: string,
  ibu: string,
  brewers_tips: string
}
export type KeyWord = {
  keyword: string
}
function App() {
  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch()
  const beers: Array<BeerItem> = useSelector((state: AppState) => state.beers.items);
  useEffect(() => {
    const fetchBeers = async () => {
      const callAPI = await fetch(`https://api.punkapi.com/v2/beers`)
      const data = await callAPI.json();
      setLoading(false);
      dispatch(setBeersAction(data));
    }
    fetchBeers()
    console.log(beers)
  }, [])

  

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home isLoaded={loading} beerItems={beers}/>}/>
        <Route path="/details/:id" element={<FullArticle beers={beers}/>} />   
      </Routes>
    </div>
  );
}


export default App;
