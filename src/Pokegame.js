import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
  static defaultProps = {
    characters: [
      { id: 34, name: "La Monte Young", type: "drone", exp: 62 },
      { id: 1, name: "Hermann Helmholtz", type: "wave", exp: 163 },
      { id: 22, name: "Georg Luckacs", type: "ink", exp: 172 },
      { id: 65, name: "Hildegard van Bingen", type: "drone", exp: 178 },
      { id: 14, name: "Fela Kuti", type: "electric", exp: 212 },
      { id: 57, name: "Franics Bacon", type: "normal", exp: 95 },
      { id: 69, name: "Beyonce", type: "fire", exp: 225 },
      { id: 73, name: "Lionel Loueke", type: "bop", exp: 165 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.characters];
    while(hand1.length < hand2.length){
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randCharacter = hand2.splice(randIdx, 1)[0];
        hand1.push(randCharacter);
    }
    let exp1 = hand1.reduce((exp, character) => exp + character.exp, 0);
    let exp2 = hand2.reduce((exp, character) => exp + character.exp, 0);
    return (
      <div>
        <Pokedex character={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedex character={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    );
  }
}

export default Pokegame