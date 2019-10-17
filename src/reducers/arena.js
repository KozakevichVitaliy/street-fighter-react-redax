import R from 'ramda'
import {
  PUSH_FIGHTER_ID_TO_ARENA_SUCCESS
} from '../actionTypes'

const initialState = {
  ids: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case PUSH_FIGHTER_ID_TO_ARENA_SUCCESS:
      return R.merge(state, {
        ids: R.append(payload, state.ids)
      })
    default:
      return state
  }
}