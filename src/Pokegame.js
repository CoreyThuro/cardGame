import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
  static defaultProps = {
    characters: [
      {
        id: 34,
        name: "La Monte Young",
        type: "drone",
        exp: 62,
        img: "https://www.famouscomposers.net/images/la-monte-young.jpg",
      },
      {
        id: 1,
        name: "H. Helmholtz",
        type: "wave",
        exp: 163,
        img:
          "https://www.hzg.de/imperia/md/images/hzg/presse/fotos/fittosize__680_0_8aa86f50a8738c77ca473216a1fbc89f_hermann_helmholtz.jpg",
      },
      {
        id: 22,
        name: "Georg Luckacs",
        type: "ink",
        exp: 172,
        img: "https://www.workersliberty.org/files/pictures/lukacs-1919.jpg",
      },
      {
        id: 65,
        name: "H. van Bingen",
        type: "drone",
        exp: 17,
        img:
          "https://s3-us-west-2.amazonaws.com/files.catholicworldreport.com/2018/04/senz_4.12-575x381.jpg",
      },
      {
        id: 14,
        name: "Fela Kuti",
        type: "electric",
        exp: 212,
        img:
          "https://www.blackpast.org/wp-content/uploads/Femi_Kuti_Photo_by_Tom_Beetz_CC_BY_2.0.jpg",
      },
      {
        id: 57,
        name: "Franics Bacon",
        type: "ink",
        exp: 95,
        img:
          "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTIwNjA4NjMzNzMxNzc4MDYw/francis-bacon-9194632-1-402.jpg",
      },
      {
        id: 69,
        name: "Beyonce",
        type: "fire",
        exp: 225,
        img:
          "https://media.npr.org/assets/img/2018/10/11/hsieh_angela_music_turntables_beyonce_wide-0a3bbf1dd333de9f77c0795468fec0c987eb63c8-s800-c85.jpg",
      },
      {
        id: 73,
        name: "Lionel Loueke",
        type: "bop",
        exp: 165,
        img:
          "https://downbeat.com/images/news/_full/Loueke_MarkSheldon_WEB.jpg",
      },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.characters];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randCharacter = hand2.splice(randIdx, 1)[0];
      hand1.push(randCharacter);
    }
    let exp1 = hand1.reduce((exp, character) => exp + character.exp, 0);
    let exp2 = hand2.reduce((exp, character) => exp + character.exp, 0);
    return (
      <div>
        <Pokedex character={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex character={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame