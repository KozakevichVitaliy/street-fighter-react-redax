import React, { Component } from "react";
import { connect } from "react-redux";

import { getFightersInArena } from "../../selectors";

class Arena extends Component {
  componentDidMount() {
  }
  
  render() {
   
    return (
      <div>
        Arena
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
