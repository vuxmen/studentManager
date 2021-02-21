import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
);