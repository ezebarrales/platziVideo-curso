import { combineReducers } from 'redux'
import videosReducer from './videosReducer'
import playerReducer from './playerReducer'
import userReducer from './userReducer'

const allReducers = combineReducers({
    videosReducer,
    playerReducer,
    userReducer,
})

export default allReducers