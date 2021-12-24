import React, { FC, useEffect, useState } from 'react'
import { BeerItem } from '../App';
import { Link } from 'react-router-dom';
import { useMarker } from 'react-mark.js';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface articlePreviewProps {
    name: string,
    id: number,
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
          if (marker) {
             marker.unmark(prevKeyWord);
             marker.mark(keyWord);
             setPrevKeyWord(keyWord) 
            }
    }, [marker, keyWord, prevKeyWord]);

    return (
      <Grid ref={markerRef}  item key={id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '5%',
                    }}
                    style={{padding: '0',
                            height: '60%',
                            width: '30%',
                            margin: '5px auto',
                          }}
                    image={imageURL}
                    alt="beer"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {name }
                    </Typography>
                    <Typography style={{fontStyle: 'italic'}}>
                            {tagline}
                    </Typography>
                    <Typography>
                            {description.length <= 100 ? description : description.substring(0, 100) + '...'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link className='more-info' to={`/details/${id}`}>
                      <Button style={{backgroundColor: '#282c34'}} variant="contained">View more...</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
        // <div ref={markerRef} className='beer-item'>
        //     <div className='beer-image-container'>
        //       <img  className='beer-image' src={imageURL} alt='beer'></img>
        //     </div>
        //     <h3 >{name}</h3>
        //     <div className='tagline'>{tagline}</div>
        //     <div id='id' className='description'>{description.length <= 100 ? description : description.substring(0, 100) + '...'}</div>
        //     <Link className='more-info'  to={`/details/${id}`}>View more...</Link>
        // </div>
    )
}

export default ArticlePreviewItem
