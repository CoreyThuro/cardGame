import React, { Component } from 'react';
import "./Pokecard.css";

class Pokecard extends Component {
    render() {
        return (
          <div className="Pokecard">
            <h1 className="Pokecard-title">{this.props.name}</h1>
            <img className="Pokecard-img" src={this.props.img} alt={this.props.name} />
            <div className="Pokecard-data">Type: {this.props.type}</div>
            <div className="Pokecard-data">EXP: {this.props.exp}</div>
          </div>
        );
    }
}

export default Pokecard;