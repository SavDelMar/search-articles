import React, { FC, useState } from 'react'
import { findAll } from "highlight-words-core";
import Mark from "mark.js";


interface articlePreviewProps {
    name: string,
    id: string,
    tagline: string,
    imageURL: string,
    description:  string
  }


  const ArticlePreviewItem: FC<articlePreviewProps> = ({name, id, tagline, imageURL, description}) => {
      

         console.log('ArticlePreviewItem', description)
    return (
        <div  className='beer-item'>
            <img className='beer-image' src={imageURL} alt='beer'></img>
            <h3 style={{color: 'red'}}>{name}</h3>
            <div className='tagLine'>{tagline}</div>
            <div id='id' className='description'>{description.length <= 100 ? description : description.substring(0, 100) + '...'}</div>

        </div>
    )
}

export default ArticlePreviewItem
