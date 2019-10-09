import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import fighters from './fighters'
import fightersPage from './fightersPage'
import dialog from './dialog'

export default combineReducers({
  routing: routerReducer,
  fighters,
  fightersPage,
  dialog
})