import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchFighters } from "../../actions";
import { getFighters } from "../../selectors";
import Dialog from "../modal";

class Fighters extends Component {
  componentDidMount() {
    this.props.fetchFighters();
  }
  renderFighter(fighter, index) {
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

        <Dialog fighter={fighter}/>
      </div>
    );
  }
  render() {
    const { fighters } = this.props;

    return (
      <div>
        <button id="startBtn" disabled>Start Game</button>
        <div className="fighters">
          {fighters.map(this.renderFighter)}
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  fighters: getFighters(state)
});

const mapDispatchToProps = {
  fetchFighters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fighters);
