import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {
    render() {
        return (
          <div className="Card">
            <h1 className="Card-title">{this.props.name}</h1>
            <img className="Card-img" src={this.props.img} alt={this.props.name} />
            <div className="Card-data">Type: {this.props.type}</div>
            <div className="Card-data">EXP: {this.props.exp}</div>
          </div>
        );
    }
}

export default Card;