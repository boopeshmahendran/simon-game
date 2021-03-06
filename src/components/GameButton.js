import React, { Component } from 'react'
import Color from 'color'
import { Howl } from 'howler'

class GameButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.color
    }
  }
  buttonPress(callback) {
    let audio = new Howl({
      src: [this.props.audio],
      onend: () => {
        this.setState({
          backgroundColor: this.props.color
        }, callback)
      }
    })
    audio.play()
    this.setState( { backgroundColor: Color(this.state.backgroundColor).darken(0.5) })
  }
  onClickHandler() {
    if (!this.props.activateButton) return
    this.buttonPress()
    this.props.gameButtonClicked(this.props.id)
  }
  render() {
    let styles = {
      cursor: 'pointer',
      display: 'inline-block',
      WebkitTapHighlightColor:  'rgba(255, 255, 255, 0)',
      MozTapHighlightColor:  'rgba(255, 255, 255, 0)',
      MsTapHighlightColor:  'rgba(255, 255, 255, 0)',
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div style={styles} onClick={()=>this.onClickHandler()}>
      </div>
    )
  }
}

export default GameButton
