import React from 'react';

// import reducers from "../../reducers";
// import { fetchFighterById } from "../../actions";
// import { getFighter } from "../../selectors";

// const initialState = {};


const  Dialog = ({closeModal, that, fighter}) => {
    return (
      <div className="fighter-info">
          <h1>{fighter.name || "default"}</h1>
          <hr />
          <div className="fighter-stats">
            <div className="values">
              <div>
                <span>Health</span>
                <span>{fighter.health || "default"}</span>
              </div>
              <div>
                <span>Attack</span>
                <span>{fighter.attack || "default"}</span>
              </div>
              <div>
                <span>Defence</span>
                <span>{fighter.defense || "default"}</span>
              </div>
            </div>
          </div>
          <button  onClick={() => closeModal(that)}>Choose {fighter.name}</button>
      </div>
    )
};

  export default Dialog