import R from "ramda";

import { GET_FIGHTER_BY_ID_SUCCESS  } from "../actionTypes";

const initialState = {
  isOpen: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FIGHTER_BY_ID_SUCCESS:
      // return  R.merge(state, R.indexBy(R.prop("_id"), payload));
      return R.merge(state, payload)
    default:
      return state;
  }
};