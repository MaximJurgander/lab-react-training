import React, { Component } from 'react'
import './Dice.css';

export default class Dice extends Component {
  state = {
    curDice: 1
  }


  handleClick = () => {
    setInterval(() => {
      let random = Math.floor(Math.random() * 7);
      this.setState({curDice: random})
    }, 1000);
  }

  render() {
    return (
      <div class="Dice">
        <img onClick={this.handleClick} src={`/img/dice${this.state.curDice}.png`} alt="dice"/>
      </div>
    )
  }
}
