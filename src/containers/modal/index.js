import React from 'react';

const  Dialog = ({closeModal, that, fighter}) => {
    return (
      <div className="fighter-info">
        <div className="name">
          <h2>{fighter.name || "default"}</h2>
        </div>
        <span className="border"/>
        <div>
          <div className="values">
            <div className="stats">
              <span>Health:</span>
              <span>{fighter.health || "default"}</span>
            </div>
            <div className="stats">
              <span>Attack:</span>
              <span>{fighter.attack || "default"}</span>
            </div>
            <div className="stats">
              <span>Defence:</span>
              <span>{fighter.defense || "default"}</span>
            </div>
          </div>
        </div>
        <div className="fighterBtnBlock">
          <button className="fighterBtn"  onClick={() => closeModal(that)}>Choose {fighter.name}</button>
        </div>
      </div>
    )
};

  export default Dialog