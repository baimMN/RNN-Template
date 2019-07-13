import { combineReducers } from 'redux';
import root from './root'
import user from './user'

const appReducer = combineReducers({
  root,
  user
})

export default appReducer
