import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-awesome-modal';
import { Link } from 'react-router'

import { fetchFighters, getFighterById } from "../../actions";
import { getFighters, getFighter } from "../../selectors";
import Dialog from "../modal";

class Fighters extends Component {
  constructor(props) {
    super();
    this.state = {
        visible : props.dialog,
        arenaControl: []
    }
  }
  componentDidMount() {
    this.props.fetchFighters();
  }
  openModal(that, fighterId, fetchFighterById) {
    fetchFighterById(fighterId);
    that.setState({
        visible : !that.state.dialog
    });
  }

  closeModal(that) {
    that.setState({
        visible : that.state.dialog
    });
  }

  fighterToArena(closeModal, that){
    if (that.state.arenaControl.length < 1) {
      that.setState({
        arenaControl :  [...that.state.arenaControl, 1]
      });
    } else if (that.state.arenaControl.length === 1) {
      that.setState({
        arenaControl :  [...that.state.arenaControl, 2]
      });
      that.startGameBtn.disabled = false;
    } else {
      console.log(that.state.arenaControl)
      alert('You cannot add third fighter\nPlease start the game');
    }
    closeModal(that)
  }

  renderFighter(getFighterById, openModal, fighter) {
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
          onClick={() => openModal(that, fighter._id, getFighterById)} 
        />
      </div>
    );
  }
  render() {
    const { fighters, getFighterById, fighter} = this.props;
    const that = this;
    return (
      <div>
        <div className="startGame">
          <Link to={`/arena`}>
            <button 
              className="startGameBtn"  
              ref={(button) => { that.startGameBtn = button}} 
              disabled
            >
              Start Fight
            </button>
          </Link>
        </div>
        <div className="fighters">
          {fighters.map(this.renderFighter.bind(this, getFighterById, this.openModal))}
          <Modal 
            visible={this.state.visible} 
            width="400" height="300" 
            effect="fadeInUp" 
            onClickAway={() => this.closeModal(that)}
          >
            <Dialog 
              closeModal={() => {this.fighterToArena(this.closeModal, that, fighter._id)}} 
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
  dialog: state.dialogFighter.isOpen
});

const mapDispatchToProps = {
  fetchFighters,
  getFighterById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fighters);
