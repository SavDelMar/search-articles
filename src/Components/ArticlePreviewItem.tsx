import React, { FC } from 'react'
interface articlePreviewProps {
    name: string,
    id: string,
    tagline: string,
    imageURL: string,
    description:  string
  }
  const ArticlePreviewItem: FC<articlePreviewProps> = ({name, id, tagline, imageURL, description}) =>{
    return (
        <div className='beer-item'>
            <img className='beer-image' src={imageURL} alt='beer'></img>
            <h3 style={{color: 'red'}}>{name}</h3>
            <div className='tagLine'>{tagline}</div>
            <div className='description'>{description.length <= 100 ? description : description.substring(0, 100) + '...'}</div>

        </div>
    )
}

export default ArticlePreviewItem
