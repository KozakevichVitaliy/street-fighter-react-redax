import React, { Component } from "react";
import { connect } from "react-redux";
// import Modal from 'react-awesome-modal';

import { fetchFighters, fetchFighterById } from "../../actions";
import { getFighters } from "../../selectors";
// import Dialog from "../modal";

class Fighters extends Component {
  componentDidMount() {
    this.props.fetchFighters();
  }
  
  renderFighter(fetchFighterById, fighter, index) {
    return (
      // index as a key is an anti-pattern espessialy when you have stable IDs
      // https://reactjs.org/docs/lists-and-keys.html
      
      <div className="fighter" key={index}>
        <img
          className="fighter-image"
          src={fighter.source}
          alt={fighter.source}
        />
        <span className="name">{fighter.name}</span>
        <input 
          className="showModal-btn" 
          type="button" 
          value="Fighter info" 
          onClick={() => fetchFighterById(fighter._id)} 
        />
      </div>
    );
  }
  render() {
    const { fighters, fetchFighterById} = this.props;
    return (
      <div>
        <button id="startBtn" disabled>Start Game</button>
        <div className="fighters">
          {fighters.map(this.renderFighter.bind(this, fetchFighterById))}
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  fighters: getFighters(state)
});

const mapDispatchToProps = {
  fetchFighters,
  fetchFighterById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fighters);
