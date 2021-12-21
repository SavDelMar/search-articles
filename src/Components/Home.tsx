import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BeerItem } from '../App';
import ArticleLoading from './ArticleLoading';
import ArticlePreviewItem from './ArticlePreviewItem';
import { showFullArticleAction } from '../redux/beersAction';
import Search from './Search';
import { AppState } from '../redux/rootReducer';

type homeProps = {
  beerItems: Array<BeerItem>,
  isLoaded: boolean,
}
const Home: FC<homeProps> = () =>  {  
  const dispatch = useDispatch();
  const beers: Array<BeerItem> = useSelector((state: AppState) => state.beers.items);
  const keyWord: string = useSelector((state: AppState) => state.keyword.keyword);
  const [filteredBeers, setBeers] = useState(beers)
  const regexp =  useMemo(() => new RegExp(keyWord, 'i'), [keyWord])

  useEffect(() => {
    debugger
    const filtered = beers
      .filter((beer:BeerItem) =>
        (beer.name.search(regexp) !== -1) || (beer.description.search(regexp) !== -1)
      )
    setBeers(filtered)
  }, [beers, keyWord, regexp])

  const showFullArticle = useCallback((obj) => {
    dispatch(showFullArticleAction(obj));
  }, [dispatch]);


  return (
    <div>
      <header className="App-header">
        <div id="test">SEARCH</div>
        <Search />
      </header>
      <div className='articles'>
        {beers.length !== 0
          ? filteredBeers.map((item:BeerItem, i) => (
            <ArticlePreviewItem
                name={item.name} 
                id={i+item.name} 
                tagline={item.tagline} 
                imageURL={item.image_url}
                description={item.description}
                key={i+item.name}
                keyWord={regexp}
                showFullArticle={showFullArticle}
              />
            ))
          : Array(10).fill(<ArticleLoading />)
          }
       </div>
    </div>
   
        
    )
}

export default Home
