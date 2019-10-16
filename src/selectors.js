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

export const getFighter = state => {
  const fighter = R.prop(
    state.dialogFighter[0],
    // id => getFighterById(state, id),
    state.fighters
    // id => R.find(R.propEq('_id', id), state.fighters)
  );
  return fighter;
};
