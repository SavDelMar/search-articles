import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BeerItem } from '../App';
import { setBeersAction } from '../redux/beersAction';
import { AppState } from '../redux/rootReducer';

type fullArticleProps = {
    beers: Array<BeerItem>,
}

const FullArticle: FC<fullArticleProps> = ({ beers }) => {
    const parameters = new URL(window.location.href);
    let id: number = parseInt(parameters.pathname.substring(9)) - 1
    const item: BeerItem = useSelector((state: AppState) => state.beers.items[id]);
    console.log(item)
   
   


    
    return (
        <div className='full-beer-item'>
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
                            margin: '0 auto',
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
                        alcohol by volume: {item.abv}<br></br>
                        bittering: {item.ibu}<br></br>
                        brewers tip: {item.brewers_tips}
                    </Typography>
                    <Typography>
                            {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/">
                        <Button style={{backgroundColor: 'rgb(19, 20, 43)'}} variant="contained">Return</Button>
                    </Link>
                  </CardActions>
                </Card>
        
            {/* <img className='beer-image' src={item.image_url} alt='beer'></img>
            <h3>{item.name}</h3>
            <div className='tagLine'>{item.tagline}</div>
            <div id='id' className='description'>{item.description}</div>
            <Link to="/">
                <Button style={{backgroundColor: 'rgb(19, 20, 43)'}} variant="contained">Return</Button>
            </Link> */}
        </div>
    )
}

export default FullArticle
