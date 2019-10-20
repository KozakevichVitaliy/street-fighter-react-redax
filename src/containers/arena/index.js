import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router'
import Modal from 'react-awesome-modal';

import { getFightersInArena } from "../../selectors";
import Fighter from "./fighter"

class Arena extends Component {
  constructor(props) {
    super();
    this.state = {
      fighters : props.fighters,
      fighter1Name:  props.fighters[0].name,
      fighter2Name:  props.fighters[1].name,
      fighter1Health: props.fighters[0].health,
      fighter2Health: props.fighters[1].health,
      isOpen : false
    }
  }
  fight(fighter1, fighter2, that, health, index) {
		const hitPowerFighter1 = that.getHitPower(fighter1);
		const blockPowerFighter2 = that.getBlockPower(fighter2);
		let result;
		if (hitPowerFighter1 <= blockPowerFighter2) {
      result = 0;
      if (index === 0) {
        setTimeout(() => {
          that.fighter2column.classList.toggle('block');
        }, 2700);
        setTimeout(() => {
          that.fighter2column.classList.toggle('block');
        }, 3000);
      } else {
        setTimeout(() => {
          that.fighter1column.classList.toggle('block');
        }, 2700);
        setTimeout(() => {
          that.fighter1column.classList.toggle('block');
        }, 3000);
      }
		} else {
      result = hitPowerFighter1 - blockPowerFighter2;
      if (index === 0) {
        setTimeout(() => {
          that.fighter2column.classList.toggle('punch');
        }, 2700);
        setTimeout(() => {
          that.fighter2column.classList.toggle('punch');
        }, 3000);
      } else {
        setTimeout(() => {
          that.fighter1column.classList.toggle('punch');
        }, 2700);
        setTimeout(() => {
          that.fighter1column.classList.toggle('punch');
        }, 3000);
      }
		}
		if (that.state.fighter1Health <= 0) {
      that.setState({
        isOpen: !that.state.isOpen 
      })
    } else if (that.state.fighter2Health <= 0) {
      that.setState({
        isOpen: !that.state.isOpen 
      })
    }
    if (index === 0) {
      that.punch1Btn.disabled = true;
      that.punch2Btn.disabled = false;
      that.fighter1column.classList.toggle('animate');
      setTimeout(() => {
        that.setState({
          fighter2Health: health - result 
        })
      }, 2700);
    } else {
      console.log(that);
      that.punch1Btn.disabled = false;
      that.punch2Btn.disabled = true;
      that.fighter2column.classList.toggle('animate');
      that.fighter1column.classList.toggle('animate');
      setTimeout(() => {
        that.fighter2column.classList.toggle('animate');
      }, 3500);
      setTimeout(() => {
        that.setState({
          fighter1Health: health - result 
        })
      }, 2700);
    }
    
	}
  getHitPower(fighter, min = 1, max = 2) {
		const criticalHitChance = Math.floor(min + Math.random() * (max + 1 - min));
		const powerHit = fighter.attack * criticalHitChance;
		return powerHit;
  }
  
	getBlockPower(fighter, min = 1, max = 2) {
		const dodgeChance = Math.floor(min + Math.random() * (max + 1 - min));
		const powerBlock = fighter.defense * dodgeChance;
		return powerBlock;
  }
  
  renderFighter(that, fighter, index) {
    const reverseFighter = (index) => {
      if (index === 0) {
        return "fighter"
      } else {
        return "fighter rotate"
      }
    }
    return (
      <Fighter 
        that={that}
        fighter={fighter} 
        fighters={that.state.fighters}
        fighter1Health={that.state.fighter1Health}
        fighter2Health={that.state.fighter2Health}
        index={index} 
        reverse={reverseFighter} 
        fight={this.fight}
        key={fighter._id}
      />
    );
  }

  render() {
    const { fighters } = this.props;
    const that = this;
    return (
      <div className="arena-background">
        <div className="arena-fighters">
          {fighters.map(this.renderFighter.bind(this, that))}
        </div>
        <Modal 
            visible={this.state.isOpen} 
            width="230" height="150" 
            effect="fadeInUp" 
        >
          <div>
            <div className="name">
              <h2>{(this.state.fighter1Health <= 0)? this.state.fighter2Name: this.state.fighter1Name} Winned</h2>
            </div>
            <span className="border"/>
            <div className="fighterBtnBlock">
              <Link to={`/`}>
                <button className="fighterBtn">
                  Game Over
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fighters: getFightersInArena(state)
});

export default connect(
  mapStateToProps,
  null
)(Arena);
