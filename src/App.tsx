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
  id: string,
  tagline: string,
  image_url: string,
  description:  string
}
export type KeyWord = {
  keyword: string
}
function App() {
  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch()
  const beers: Array<BeerItem> = useSelector((state: AppState) => state.beers.items);
  console.log(beers)
  useEffect(() => {
    const fetchBeers = async () => {
      const callAPI = await fetch(`https://api.punkapi.com/v2/beers`)
      const data = await callAPI.json();
      setLoading(false);
      dispatch(setBeersAction(data));
      console.log(beers)
      // setBeers(data)
    }

    fetchBeers()
  }, [])

  

  return (
    <div className="App">
      

      <Routes>
          <Route path="/home"  element={<Home isLoaded={loading} beerItems={beers}/>}/>
          <Route path="/details/:id"  element={<FullArticle  />} />   
      </Routes>
    </div>
  );
}


export default App;
