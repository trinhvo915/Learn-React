import { combineReducers} from 'redux';
import filmReducer from '../reducers/filmReducer';
const myReducer = combineReducers ({
    filmReducer // filmReducer : filmReducer
});
export default myReducer;