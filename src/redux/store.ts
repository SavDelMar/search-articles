import { createStore } from 'redux';
import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        // Save the serialise
const store = createStore(rootReducer);


export default store;

