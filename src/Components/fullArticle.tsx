import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, {FC} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BeerItem } from '../App';
import { AppState } from '../redux/rootReducer';

type fullArticleProps = {
    beers: Array<BeerItem>,
}

const FullArticle: FC<fullArticleProps> = () => {
    
    const parameters = new URL(window.location.href);
    let id: number = parseInt(parameters.pathname.substring(9)) - 1;
    const item: BeerItem = useSelector((state: AppState) => state.beers.items[id]);
   
    document.getElementById('body')!.style.backgroundColor = '#282c34';
       
    return (
        <div className='full-beer-item'>
          <Card
            className=''
              sx={{ width: '100%',height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: '5%',
                }}
                style={{padding: '0',
                        width: '10%',
                        margin: '5px auto',
                      }}
                image={item.image_url}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                {item.name}
                </Typography>
                <Typography style={{fontStyle: 'italic'}}>
                        {item.tagline}
                </Typography>
                <Typography style={{textDecoration: 'underline'}}>
                    alcohol by volume: {' ' + item.abv}<br></br>
                    bittering: {' ' + item.ibu}<br></br>
                    brewers tip: {' ' + item.brewers_tips}
                </Typography>
                <Typography>
                        {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link className='more-info' to="/">&#x2190; Back to homepage</Link>
              </CardActions>
          </Card>
        </div>
    )
}

export default FullArticle
