import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-awesome-modal';

import { fetchFighters, fetchFighterById } from "../../actions";
import { getFighters, getFighter } from "../../selectors";
import Dialog from "../modal";

class Fighters extends Component {
  constructor(props) {
    super();
    this.state = {
        visible : props.dialog
    }
  }
  componentDidMount() {
    this.props.fetchFighters();
  }
  openModal(that, fighterId, fetchFighterById) {
    const { dialog } = that.props
    fetchFighterById(fighterId);
    that.setState({
        visible : !dialog
    });
  }

  closeModal(that) {
    const { dialog } = that.props
    that.setState({
        visible : dialog
    });
  }
  renderFighter(fetchFighterById, openModal, fighter) {
    const that = this;
    return (
      // index as a key is an anti-pattern espessialy when you have stable IDs
      // https://reactjs.org/docs/lists-and-keys.html
      
      <div className="fighter" key={fighter._id}>
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
          onClick={() => openModal(that, fighter._id, fetchFighterById)} 
        />
      </div>
    );
  }
  render() {
    const { fighters, fetchFighterById, fighter} = this.props;
    const that = this;
    return (
      <div>
        <button id="startBtn" disabled>Start Game</button>
        <div className="fighters">
          {fighters.map(this.renderFighter.bind(this, fetchFighterById, this.openModal))}
          <Modal 
            visible={this.state.visible} 
            width="400" height="300" 
            effect="fadeInUp" 
            onClickAway={() => this.closeModal(that)}
          >
            <Dialog 
              closeModal={this.closeModal} 
              that={this}
              fighter={fighter || {}}
            />
          </Modal>
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  fighters: getFighters(state),
  fighter: getFighter(state),
  dialog: state.dialogFighter.visible
});

const mapDispatchToProps = {
  fetchFighters,
  fetchFighterById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fighters);
