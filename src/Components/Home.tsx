import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BeerItem } from '../App';
import ArticleLoading from './ArticleLoading';
import ArticlePreviewItem from './ArticlePreviewItem';
import { showFullArticleAction } from '../redux/beersAction';
import Search from './Search';
import { AppState } from '../redux/rootReducer';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

type homeProps = {
  beerItems: Array<BeerItem>,
  isLoaded: boolean,
}

const Home: FC<homeProps> = () => {
  const dispatch = useDispatch();
  const beers: Array<BeerItem> = useSelector((state: AppState) => state.beers.items);
  const keyWord: string = useSelector((state: AppState) => state.keyword.keyword);
  const [filteredBeers, setBeers] = useState(beers);
  const [searchResults, setSearchResults] = useState(25);
  const regexp = useMemo(() => new RegExp(keyWord, 'ig'), [keyWord]);
  document.getElementById('body')!.style.backgroundColor = 'rgb(255, 255, 255)';

  useEffect(() => {
    const filtered = beers
      .filter((beer: BeerItem) => {
        let nameMatch = beer.name.search(regexp);
        let descriptionMatch = beer.description.search(regexp);
        return (nameMatch !== -1) || (descriptionMatch !== -1)
      })
      .sort(function (a, b) {
        // двухуровневая сортировка: по общему количеству вхождений в название и описание, по приоритетности названия перед описанием
        return (Array.from(b.name.matchAll(regexp)!).length + Array.from(b.description.matchAll(regexp)!).length)
          - (Array.from(a.name.matchAll(regexp)!).length + Array.from(a.description.matchAll(regexp)!).length)
          || (Array.from(b.name.matchAll(regexp)!).length - Array.from(a.name.matchAll(regexp)!).length)
      });
    setSearchResults(filtered.length);
    setBeers(filtered);
  }, [beers, keyWord, regexp])

  const showFullArticle = useCallback((obj) => {
    dispatch(showFullArticleAction(obj));
  }, [dispatch]);


  return (
    <div>
      <header className="App-header">
        <div className="search-name">Find YOUR beer</div>
        <Search />
      </header>
      <div className='articles'>
        <Container sx={{ py: 8 }} maxWidth="md">
          { searchResults !== 25 
            ? <div className='search-results'>Results: {searchResults}</div>
            : <div className='slogan'>If You  will not go for the beer, then the beer comes after you</div>
           }  
          {/* End hero unit */}
          <Grid container spacing={4}>
            {beers.length !== 0
          ? filteredBeers.map((item:BeerItem, i) => (
            <ArticlePreviewItem
                name={item.name} 
                id={item.id} 
                tagline={item.tagline} 
                imageURL={item.image_url}
                description={item.description}
                key={item.id+ ' ' + item.name}
                keyWord={keyWord}
                showFullArticle={showFullArticle}
              />
            ))
          : Array(25).fill(<ArticleLoading />)
          }
          </Grid>
        </Container>
       </div> 
    </div>
    )
}

export default Home
