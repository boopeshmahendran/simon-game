import React, { Component } from 'react'
import ActionButton from './ActionButton'
import { colors } from '../constants'

class GameMenu extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      borderRadius: '100%',
      backgroundColor: colors.black,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.3rem',
    }
  }
  render() {
    return (
      <div style={Object.assign({}, this.styles, this.props.customStyles)}>
        <ActionButton gameState={this.props.gameState} onClick={() => this.props.actionButtonClicked()}/>
        <br />
        <span>Score: {this.props.score}</span>
        <span>Highscore: {this.props.highScore}</span>
      </div>
    );
  }
}

export default GameMenu
