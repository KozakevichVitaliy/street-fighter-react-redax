import R from "ramda";

import { FETCH_FIGHTERS_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FIGHTERS_SUCCESS:
      // it's better to normalize payload before dispatching the action and put in the reducer already normalized data
      const newValues = R.indexBy(R.prop("_id"), payload);
      return R.merge(state, newValues);
    default:
      return state;
  }
};
