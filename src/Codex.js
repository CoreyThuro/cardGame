import React, { Component } from 'react'
import Card from './Card'
import './Codex.css'

class Codex extends Component {
  
  render() {
    let title; 
    if(this.props.isWinner) {
      title = <h1 className="Winner">Winning Hand</h1>
    } else {
      title = <h1 className="Loser">Losing Hand</h1>;
    }
    return (
      <div className="Codex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Codex-cards">
          {this.props.character.map((p) => (
            <Card id={p.id} name={p.name} type={p.type} exp={p.exp} img={p.img} />
          ))}
        </div>
      </div>
    );
  }
}

export default Codex;