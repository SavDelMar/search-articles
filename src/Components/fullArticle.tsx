import React, {FC} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BeerItem } from '../App';


const FullArticle: FC = ({}) =>  {   

   let beerItem: BeerItem = {
       name: '',
       id: '',
       image_url: '',
       tagline: '',
       description: ''
   }
    return (
        <div  className='full-beer-item'>
            <img className='beer-image' src={beerItem.image_url} alt='beer'></img>
            <h3>{beerItem.name}</h3>
            <div className='tagLine'>{beerItem.tagline}</div>
            <div id='id' className='description'>{beerItem.description}</div>
            <Link to="/home">Return</Link>
        </div>
    )
}

export default FullArticle
