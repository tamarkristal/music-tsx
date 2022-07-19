import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { songReducer} from '../store/reducer/songReducer'
export const store = createStore(combineReducers({ songReducer})  , applyMiddleware(thunk)
);export type RootState = ReturnType<typeof store.getState>;
