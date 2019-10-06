import {
  FETCH_FIGHTERS_START,
  FETCH_FIGHTERS_SUCCESS,
  FETCH_FIGHTERS_FAILURE
} from '../actionTypes'
import {
  fetchFighters as fetchFightersApi
} from '../api'


export const fetchFighters = () => async dispatch => {
  dispatch({type: FETCH_FIGHTERS_START})

  try {
    const fighters = await fetchFightersApi()
    dispatch({
      type: FETCH_FIGHTERS_SUCCESS,
      payload: fighters
    })
  } catch (err) {
    dispatch({
      type: FETCH_FIGHTERS_FAILURE,
      payload: err,
      error: true
    })
  }
  
}