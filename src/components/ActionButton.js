import React, { Component } from 'react'

class ActionButton extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: '3rem'
    }
  }
  render() {
    let icon
    switch(this.props.gameState) {
      case 'gamePaused':
      case 'gameNotStarted': icon = <i className="fa fa-play" aria-hidden="true"></i>
        break
      case 'tonePlaying':
      case 'gameRunning': icon = <i className="fa fa-pause" aria-hidden="true"></i>
        break
      case 'gameOver': icon = <i className="fa fa-repeat" aria-hidden="true"></i>
        break
    }
    return (
      <button style={this.styles} onClick={() => this.props.onClick()}>
        {icon}
      </button>
    );
  }
}

export default ActionButton
