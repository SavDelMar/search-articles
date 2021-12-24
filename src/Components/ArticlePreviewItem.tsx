import React, { FC, useEffect, useState } from 'react'
import { BeerItem } from '../App';
import { Link } from 'react-router-dom';
import { useMarker } from 'react-mark.js';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
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
    const [prevKeyWord, setPrevKeyWord] = useState('');
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
                    width: '30%',
                    height: '50%',
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
              View more &#x2192;
            </Link>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default ArticlePreviewItem;
