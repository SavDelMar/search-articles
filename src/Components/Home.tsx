import React, { FC } from 'react'
import { IBeer } from '../App';
import ArticleLoading from './ArticleLoading';
import ArticlePreviewItem from './ArticlePreviewItem';

interface homeProps {
  beerItems: Array<IBeer>,
  isLoaded: boolean
}
const Home: FC<homeProps> = ({beerItems, isLoaded}) =>  {    


  console.log('fromHOME' , beerItems, isLoaded)
  return (
        <div className='articles'>
             {beerItems.length !== 0
          ? beerItems.map((item:IBeer, i) => (
             <ArticlePreviewItem
                name={item.name} 
                id={i+item.name} 
                tagline={item.tagline} 
                imageURL={item.image_url}
                description={item.description}
                key={i+item.name}
              />
            ))
          : Array(10).fill(<ArticleLoading />)}
        </div>
        
    )
}

export default Home
