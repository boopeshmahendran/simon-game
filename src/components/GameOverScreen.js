import React from 'react';

const GameOverScreen = (props) => {
  let styles = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center'
  }
  if (!props.isGameOver) styles.display = 'none'
  return (
    <div style={styles}>
      <h1>Game Over</h1>
    </div>
  )
}

export default GameOverScreen
