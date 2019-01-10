import {combineReducers} from 'redux';
import TodosList from './todos-list-reducer';

const RootReducer = combineReducers({
    todos : TodosList,
})

export default RootReducer;