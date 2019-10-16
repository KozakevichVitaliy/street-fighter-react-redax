import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import fighters from './fighters'
import fightersPage from './fightersPage'
import dialogFighter from './dialogFighter'

export default combineReducers({
  routing: routerReducer,
  fighters,
  fightersPage,
  dialogFighter
})