import React, { Component } from 'react';
import GameButton from './GameButton';
import GameMenu  from './GameMenu';
import { colors } from '../constants';
import Radium from 'radium';

class GameBoard extends Component {
  constructor() {
    super();
    this.styles = {
      width: '500px',
      height: '500px',
      position: 'relative',
      fontSize: 0,

      '@media screen and (max-width: 768px) and (orientation: portrait)': {
        width: '90vw',
        height: '90vw'
      },
      '@media screen and (max-width: 768px) and (orientation: landscape)': {
        width: '85vh',
        height: '85vh'
      }
    }

    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      score: 0,
      highScore: parseInt(localStorage.getItem('highScore')) || 0,
      currentOrder: [],
      currentClick: 0,
      gameState: 'gameNotStarted'
    }
  }
  setInitialState(callback) {
    this.setState(this.getInitialState(), callback)
  }
  actionButtonClicked() {
    switch(this.state.gameState) {
      case 'gameNotStarted':
       this.playTone()
       this.setState({
        gameState: 'gameRunning'
      })
        break
      case 'gameOver':
        this.setInitialState(this.actionButtonClicked)
        break
    }
  }
  gameButtonClicked(buttonId) {
  }
  playTone() {
    this.setState({
      gameState: 'tonePlaying'
    }, () => {
      let currentOrder = this.state.currentOrder
      // choose random number from 1 to 4
      let randomNumber = Math.floor(Math.random() * 4)
      currentOrder.push(randomNumber)
      this.setState({
        currentOrder
      })
      const asyncPlay = (i) => {
        if (i >= currentOrder.length) {
          this.setState({
            gameState: 'gameRunning'
          })
          return
        }
        this['button' + currentOrder[i]].buttonPress(() => {
          setTimeout(() => asyncPlay(i + 1), 500)
        })
      }
      asyncPlay(0)
    })
  }
  render() {
    let gameColors = [colors.red, colors.blue, colors.green, colors.yellow]
    return (
      <div style={this.styles}>
        {gameColors.map((color, i) => (
          <GameButton
           color={color}
           gameButtonClicked={(buttonId)=>this.gameButtonClicked(buttonId)}
           tonePlaying={this.state.gameState === 'tonePlaying'}
           audio={`sounds/sound${i}.mp3`}
           ref={(button) => this['button'+i] = button}
           key={i}
           id={i}
           width='50%'
           height='50%'/>
        ))}
        <GameMenu score={this.state.score} highScore = {this.state.highScore} gameState={this.state.gameState}
        actionButtonClicked={() => this.actionButtonClicked()}
        customStyles={{
          width: '50%',
          height: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          zIndex: 1
        }}/>
      </div>
    );
  }
}

export default Radium(GameBoard);
