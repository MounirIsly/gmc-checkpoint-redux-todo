import {createStore, combineReducers} from "redux"
import tasks from './components/reducers';

const rootReducer = combineReducers({
    tasks
})

export const store = () => createStore(rootReducer)