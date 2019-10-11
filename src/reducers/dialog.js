import R from "ramda";

import { FETCH_FIGHTER_BY_ID_SUCCESS  } from "../actionTypes";

const initialState = {
  visible: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FIGHTER_BY_ID_SUCCESS:
      // const fighter = R.indexBy(R.prop("_id"), payload);
      // return R.merge(state, fighter);
      const visible = R.merge(state, payload);
      return R.merge(visible, {
        visible: true
      })
    default:
      return state;
  }
};