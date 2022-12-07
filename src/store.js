
import { createStore } from 'redux';
import reducers from './Reducers/reducers';

// setting STORE
const store = createStore(reducers)

export default store

