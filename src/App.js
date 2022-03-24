import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Board from './utils/Board'
import BoardAI from './utils/BoardAI'
import React, { useState, useEffect } from 'react'

let initialEnemyBoard = [
  [1,1,1,1,1,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0],
  [1,0,0,1,1,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,0,0,0]
]





let initialPlayerBoard = [
  [0,0,0,0,1,1,1,1,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,0,1,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,1,1,0,1,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0]
]

let enemyBoard = JSON.parse(JSON.stringify(initialEnemyBoard))
let playerBoard = JSON.parse(JSON.stringify(initialPlayerBoard))

// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot

function App() {
  const [ message, setMessage ] = useState('')
  const [ hitCount, setHitCount] = useState(0)
  const [ hitCountAI, setHitCountAI] = useState(0)
  const [running, setRunning] = useState(true)

  

  const fireTorpedoAI = () => {
    
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      if(playerBoard[y-1][x-1] == 1) {
        
        let id = `aisquare-${x}-${y}`
        let element = document.getElementById(id)
        element.style.backgroundColor = 'red'
        playerBoard[y-1][x-1] = 2
        setHitCountAI(hitCountAI + 1)
        setMessage('You got hit') 
        setTimeout(() => {
          setMessage(null)
        }, 1600)
        
      } else if  (playerBoard[y-1][x-1] == 0){
        console.log(`aisquare-${x}-${y}`)
        let id = `aisquare-${x}-${y}`
        let element = document.getElementById(id)
        element.style.backgroundColor = 'white'
        playerBoard[y-1][x-1] = 3
      } 
    

  }

  const fireTorpedo = (x,y) => {
    if(running) {
      console.log(x,y)
      console.log(enemyBoard[y-1][x-1])
      
      
      
      if(enemyBoard[y-1][x-1] == 1) {
        setMessage('You hit a ship') 
        console.log('You hit a ship')
        
        let id = `square-${x}-${y}`
        let element = document.getElementById(id)
        element.style.backgroundColor = 'red'
        enemyBoard[y-1][x-1] = 2
        setHitCount(hitCount + 1)
        setTimeout(() => {
          setMessage(null)
        }, 1600)
        
      } else if  (enemyBoard[y-1][x-1] == 0){
        setMessage('You missed the shot') 
        
        let id = `square-${x}-${y}`
        let element = document.getElementById(id)
        element.style.backgroundColor = 'white'
        enemyBoard[y-1][x-1] = 3
        setTimeout(() => {
          setMessage(null)
        }, 1600)
      } 
      console.log('end turn')
      console.log('hitCount',hitCount)
      fireTorpedoAI()
      if(hitCount  == 17) {
        setMessage('You won!')
        setRunning(false)
        setHitCount(0)
      }
    
      if(hitCountAI  == 17) {
        setMessage('You lost!')
        setRunning(false)
        setHitCountAI(0)
      }  
    }

  }

  const handleRestart = () => {
    setHitCount(0)
    setHitCountAI(0)
    
    
    let enemyboard = document.getElementById('enemy-board')
    for(let i = 0; i < enemyboard.children.length ; i++) {
      enemyboard.children[i].style.backgroundColor = 'blue'
    }
    let playerboard = document.getElementById('player-board')
    for(let i = 0; i < playerboard.children.length ; i++) {
      playerboard.children[i].style.backgroundColor = 'blue'
    }
    console.log(initialEnemyBoard)
    enemyBoard = initialEnemyBoard
    playerBoard = initialPlayerBoard
    setRunning(true)
  }

  

  return (
    <div className="row d-flex flex-row mt-5">
      <div className='col-1 d-flex justify-content-center align-items-center'>{hitCount}</div>
      <div className="col-10 d-flex flex-row">
        <Board fireTorpedo={fireTorpedo}/>
        <div className='w-25 d-flex flex-column justify-content-center align-items-center'>
            {message}
            <div className='restart-btn btn bg-danger' onClick={handleRestart}>restart</div>
        </div>
        <BoardAI/>
      </div>
      <div className='col-1 d-flex justify-content-center align-items-center'>{hitCountAI}</div>
        <div></div>
        

    </div>
  )
}

export default App
