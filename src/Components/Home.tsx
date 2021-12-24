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
const Home: FC<homeProps> = ({ }) => {
  const dispatch = useDispatch();
  const beers: Array<BeerItem> = useSelector((state: AppState) => state.beers.items);
  const keyWord: string = useSelector((state: AppState) => state.keyword.keyword);
  const [filteredBeers, setBeers] = useState(beers)
  const regexp = useMemo(() => new RegExp(keyWord, 'ig'), [keyWord])
      document.getElementById('body')!.style.backgroundColor = 'rgb(255, 255, 255)'

  // function searchAndSort(array: Array<BeerItem>, searchWord: RegExp) { 
  //   type newArray = {

  //   }
  //   let newArray = [...array];
  //   for (let i = 0; i < array.length; i++) {
  //     let nameMatch = array[i].name.match(searchWord).length;
  //     let descriptionMatch = array[i].description.match(searchWord).length;
  //     if (nameMatch > 0) { 
  //       newArray[i].nameMatch = nameMatch;
  //     }
  //     if (descriptionMatch > 0) { 
  //       newArray[i].descriptionMatch = descriptionMatch;
  //     }
  //   }
  //   return newArray
  // }
  useEffect(() => {
    debugger
    const filtered = beers
      .filter((beer: BeerItem) => {
        let nameMatch = beer.name.search(regexp);
        let descriptionMatch = beer.description.search(regexp);
        return (nameMatch !== -1) || (descriptionMatch !== -1)
      })
      .sort(function (a, b) {
        console.log(a, a.name.matchAll(regexp)!, Array.from(a.name.matchAll(regexp)!).length)
        debugger
        return (Array.from(b.name.matchAll(regexp)!).length + Array.from(b.description.matchAll(regexp)!).length)
          - (Array.from(a.name.matchAll(regexp)!).length + Array.from(a.description.matchAll(regexp)!).length)
          || (Array.from(b.name.matchAll(regexp)!).length - Array.from(a.name.matchAll(regexp)!).length)
      });
    
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
        <Container sx={{ py: 8 }} maxWidth="md">
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
