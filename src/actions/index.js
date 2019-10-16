import {
  FETCH_FIGHTERS_START,
  FETCH_FIGHTERS_SUCCESS,
  FETCH_FIGHTERS_FAILURE,
  GET_FIGHTER_BY_ID_START,
  GET_FIGHTER_BY_ID_SUCCESS,
  GET_FIGHTER_BY_ID_FAILURE,
  PUSH_FIGHTER_ID_TO_ARENA_START,
  PUSH_FIGHTER_ID_TO_ARENA_SUCCESS,
  PUSH_FIGHTER_ID_TO_ARENA_FAILURE

} from '../actionTypes'
import {
  fetchFighters as fetchFightersApi
  // fetchFighterByIdApi
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

export const getFighterById = id => dispatch => {
  dispatch({type: GET_FIGHTER_BY_ID_START})

  try {
    // const fighter = await fetchFighterByIdApi(id)
    dispatch({
      type: GET_FIGHTER_BY_ID_SUCCESS,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: GET_FIGHTER_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const pushFighterById = id => dispatch => {
  dispatch({type: PUSH_FIGHTER_ID_TO_ARENA_START})

  try {
    // const fighter = await fetchFighterByIdApi(id)
    dispatch({
      type: PUSH_FIGHTER_ID_TO_ARENA_SUCCESS,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: PUSH_FIGHTER_ID_TO_ARENA_FAILURE,
      payload: err,
      error: true
    })
  }
}