import React from 'react';

const Fighter = ({
  that, 
  fighter, 
  fighters, 
  fighter1Health, 
  fighter2Health, 
  index, 
  reverse, 
  fight 
}) => {
  return (
    <div 
      className="column"
      ref={(div) => { (index === 0)? that.fighter1Block = div: that.fighter2Block = div}}
    >
      <div className="values">
        <div className="name">
          <h2 className="custom">{fighter.name}</h2>
        </div>
        <div className="stats">
          <span>Attack:</span>
          <span>{fighter.attack}</span>
          <span>Defence:</span>
          <span>{fighter.defense}</span>
          <span>Health:</span>
          <span>{(index === 0)? fighter1Health: fighter2Health}</span>
        </div>
      </div>
      <div>
        <div className={reverse(index)}>
            <img
              className="fighter-image"
              src={fighter.source}
              alt={fighter.source}
              ref={(img) => { (index === 0)? that.fighter1column = img: that.fighter2column = img}}
            />
          </div>
          <div className="fighterBtnBlock">
            <button 
              className="punchBtn" 
              onClick={() => {
                if (index === 0) {
                  fight(...fighters, that, fighter2Health, index)
                } else {
                  const copy = [...fighters];
                  const copyReverse = copy.reverse();
                  fight(...copyReverse, that, fighter1Health, index)
                }
              }}
              ref={(button) => { (index === 0)? that.punch1Btn = button: that.punch2Btn = button}}
            >
              Punch
            </button>
          </div>
      </div>
    </div>
  )
}

export default Fighter