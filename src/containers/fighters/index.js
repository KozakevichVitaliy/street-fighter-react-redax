import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-awesome-modal';
import { Link } from 'react-router'

import { fetchFighters, getFighterById, pushFighterById } from "../../actions";
import { getFighters, getFighter } from "../../selectors";
import Dialog from "../modal";

class Fighters extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen : props.visible,
      arenaControl: []
    }
  }
  componentDidMount() {
    this.props.fetchFighters();
  }
  openModal(that, fighterId, fetchFighterById) {
    fetchFighterById(fighterId);
    that.setState({
      isOpen : !that.state.visible
    });
  }

  closeModal(that) {
    that.setState({
      isOpen : that.state.visible
    });
  }

  fighterToArena(closeModal, that, fighterId, pushFighterById){
    if (that.state.arenaControl.length < 1) {
      that.setState({
        arenaControl :  [...that.state.arenaControl, fighterId]
      });
      pushFighterById(fighterId)
    } else if (that.state.arenaControl.length === 1) {
      that.setState({
        arenaControl :  [...that.state.arenaControl, fighterId]
      });
      pushFighterById(fighterId)
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
    const { fighters, getFighterById, fighter, pushFighterById} = this.props;
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
            visible={this.state.isOpen} 
            width="230" height="180" 
            effect="fadeInUp" 
            onClickAway={() => this.closeModal(that)}
          >
            <Dialog 
              closeModal={() => {this.fighterToArena(this.closeModal, that, fighter._id, pushFighterById)}} 
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
  visible: state.dialogFighter.isOpen
});

const mapDispatchToProps = {
  fetchFighters,
  getFighterById,
  pushFighterById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fighters);
