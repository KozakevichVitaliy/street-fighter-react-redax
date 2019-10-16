import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import fighters from './fighters'
import fightersPage from './fightersPage'
import dialogFighter from './dialogFighter'
import arena from './arena'

export default combineReducers({
  routing: routerReducer,
  fighters,
  fightersPage,
  dialogFighter,
  arena
})