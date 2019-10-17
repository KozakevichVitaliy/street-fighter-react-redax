import React, { Component } from "react";
import { connect } from "react-redux";

import { getFightersInArena } from "../../selectors";

class Arena extends Component {
  componentDidMount() {
  }
  
  renderFighter(fighter, index) {
    const reverseFighter = (index) => {
      if (index === 0) {
        return "fighter"
      } else {
        return "fighter"
      }
    }
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
      </div>
    );
  }

  render() {
    const { arena } = this.props
    return (
      <div className="arena-background">
        <div className="arena-fighters">
          {arena.map(this.renderFighter)}
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  arena: getFightersInArena(state)
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arena);
