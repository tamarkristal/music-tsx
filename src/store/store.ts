import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { songReducer} from '../store/reducer/song'
export const store = createStore(combineReducers({ songReducer})  , applyMiddleware(thunk)
);