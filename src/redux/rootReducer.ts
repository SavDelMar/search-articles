
   
import { combineReducers } from 'redux';
import { beersReducer, fullArticleReducer, keyWordReducer } from './beersReducer';
const rootReducer = combineReducers({
  beers: beersReducer,
  fullArticle: fullArticleReducer,
  keyword: keyWordReducer
});
export type AppState  = ReturnType<typeof rootReducer>

export default rootReducer;