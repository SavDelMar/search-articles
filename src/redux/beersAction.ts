import { BeerItem } from "../App";
import axios from 'axios';

export const setKeywordAction = (keyword: string) => ({
    type: 'SET_KEYWORD',
    payload: keyword,
    })

export const setBeersAction = (items: Array<BeerItem>) => ({
    type: 'SET_BEERS',
    payload: items,
})

export const showFullArticleAction = (item: BeerItem) => ({
    type: 'SHOW_FULL_ARTICLE',
    payload: item,
    })

export const fetchBeers = async () => {
    axios
        .get(`https://api.punkapi.com/v2/beers`)
        .then(({data}) => {
        })
}