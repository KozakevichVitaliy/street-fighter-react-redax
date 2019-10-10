import {
  FETCH_FIGHTERS_START,
  FETCH_FIGHTERS_SUCCESS,
  FETCH_FIGHTERS_FAILURE,
  FETCH_FIGHTER_BY_ID_START,
  FETCH_FIGHTER_BY_ID_SUCCESS,
  FETCH_FIGHTER_BY_ID_FAILURE

} from '../actionTypes'
import {
  fetchFighters as fetchFightersApi,
  fetchFighterByIdApi
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

export const fetchFighterById = id => async dispatch => {
  dispatch({type: FETCH_FIGHTER_BY_ID_START})

  try {
    const fighter = await fetchFighterByIdApi(id)
    dispatch({
      type: FETCH_FIGHTER_BY_ID_SUCCESS,
      payload: [fighter]
    })
  } catch (err) {
    dispatch({
      type: FETCH_FIGHTER_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}