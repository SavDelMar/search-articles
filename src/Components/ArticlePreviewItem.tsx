import React, { FC, useEffect, useState } from 'react'
import { BeerItem } from '../App';
import { Link } from 'react-router-dom';
import { useMarker } from 'react-mark.js';


interface articlePreviewProps {
    name: string,
    id: string,
    tagline: string,
    imageURL: string,
    description:  string,
    keyWord: string,
    showFullArticle: (obj:BeerItem) => void
  }


  const ArticlePreviewItem: FC<articlePreviewProps> = ({name, id, tagline, imageURL, description, keyWord, showFullArticle}) => {
    const { markerRef, marker } = useMarker();
    const [prevKeyWord, setPrevKeyWord] = useState('')
      useEffect(() => {
        debugger
          if (marker) {
             marker.unmark(prevKeyWord);
             marker.mark(keyWord);
             setPrevKeyWord(keyWord) 
            }
    }, [marker, keyWord]);

    return (
        <div ref={ markerRef } className='beer-item'>
            <img className='beer-image' src={imageURL} alt='beer'></img>
            <h3 >{name}</h3>
            <div className='tagLine'>{tagline}</div>
            <div id='id' className='description'>{description.length <= 100 ? description : description.substring(0, 100) + '...'}</div>
            <Link to={`/details/${id}`}>View more...</Link>
        </div>
    )
}

export default ArticlePreviewItem
