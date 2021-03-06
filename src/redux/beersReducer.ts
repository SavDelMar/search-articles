import { BeerItem } from "../App";
const initialStateFull: BeerItem =  {
  name: '',
  id: 0,
  tagline: '',
  image_url: '',
  description: '',
  abv: '',
  ibu: '',
  brewers_tips: ''
}
const initialState = {
    items: [],
  };
  
type TypeBeerAction = {
      type: string,
      payload: Array<BeerItem>
  }
  type TypeKeyAction = {
    type: string,
    payload: string
}
  export const beersReducer = (state = initialState, action:TypeBeerAction) => {
    switch (action.type) {
      case 'SET_BEERS':
        let newState = JSON.parse(JSON.stringify(state));
        return { ...newState, items: action.payload, /*isLoaded: true*/ };
  
     
      default:
        return state;
    }
  };
  
  export const fullArticleReducer = (state: BeerItem = initialStateFull, action:TypeBeerAction) => {
    switch (action.type) {
      case 'SHOW_FULL_ARTICLE':
        let newState = action.payload;
        return { ...newState };
  
     
      default:
        return state;
    }
  };
  const initialStateKeyword = {
    keyword: ''
  }
  export const keyWordReducer = (state = initialStateKeyword, action: TypeKeyAction) => {
    switch (action.type) {
      case 'SET_KEYWORD':
        let newState = {...state};
        newState.keyword = action.payload;
        return { ...newState };
  
     
      default:
        return state;
    }
  };

