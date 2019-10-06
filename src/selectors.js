import R from "ramda";

const getFighterById = (state, id) => R.prop(id, state.fighters);

// try to use reselect here: https://github.com/reduxjs/reselect
export const getFighters = state => {
  const fighters = R.map(
    id => getFighterById(state, id),
    state.fightersPage.ids
  );
  return fighters;
};
