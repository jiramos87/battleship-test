import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Board from './utils/Board'
import BoardAI from './utils/BoardAI'
import React, { useState, useEffect } from 'react'

// let initialEnemyBoard = [
//   [1,1,1,1,1,0,0,0,0,1],
//   [0,0,0,0,0,0,0,0,0,1],
//   [0,0,0,0,0,0,0,0,0,1],
//   [0,0,0,0,0,0,0,0,0,1],
//   [0,0,0,0,0,0,0,0,0,0],
//   [1,0,0,1,1,0,0,0,0,0],
//   [1,0,0,0,0,0,0,0,0,0],
//   [1,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [1,1,1,1,0,0,0,0,0,0]
// ]

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

let initialEnemyBoard = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

// let initialPlayerBoard = [
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0]
// ]

let enemyBoard = JSON.parse(JSON.stringify(initialEnemyBoard))
let playerBoard = JSON.parse(JSON.stringify(initialPlayerBoard))

let shipLengths = [5,4,4,3,2]

// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot

function App() {
  const [ message, setMessage ] = useState('')
  const [ hitCount, setHitCount ] = useState(0)
  const [ hitCountAI, setHitCountAI ] = useState(0)
  const [ running, setRunning ] = useState(false)
  const [ win, setWin ] = useState(false)
  const [ loose, setLoose ] = useState(false)

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
    
    randomEnemyBoardGen()
    console.log('enemyBoard', enemyBoard)
    playerBoard = initialPlayerBoard
    setRunning(true)
    setWin(false)
    setLoose(false)
    //setMessage(null)
  }

  useEffect(() => {
    putPlayerShips()
  },[handleRestart])

  const putPlayerShips = () => {
    for(let j = 0; j < playerBoard.length ; j++) {
      for(let i = 0; i < playerBoard[j].length; i++) {
        if(playerBoard[j][i] == 1) {
         let id = `aisquare-${i + 1}-${j + 1}`
         let element = document.getElementById(id)
         element.style.backgroundColor = 'grey'
        }

      }
    }
  }

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
      setTimeout( () => {
          fireTorpedoAI()
        }, 900)
      if(hitCount  == 17) {
        setMessage('You won!')
        setWin(true)
        setRunning(false)

      }
    
      if(hitCountAI  == 17) {
        setMessage('You lost!')
        setLoose(true)
        setRunning(false)
        
      }  
    }

  }

  const randomEnemyBoardGen = () => {
    console.log('shipLengths length:' , shipLengths.length)
    for(let k = 0; k < shipLengths.length ; k++) {
      let randomX = Math.floor(Math.random() * 10)
      let randomY = Math.floor(Math.random() * 10)
      let randomDir = Math.floor(Math.random() * 2)  // 0 for X direction, and 1 for Y direction
      if (randomDir == 0) {
        if (randomX + shipLengths[k] > 9) {
          randomX = Math.floor(Math.random() * 5)
        } 
        console.log(`shipLength: ${shipLengths[k]}, randomX: ${randomX}, randomY: ${randomY}, randomDir: ${randomDir}`)
        for(let i = randomX; i < randomX + shipLengths[k] ; i++) {
          enemyBoard[randomY][i] = 1
        }
      } else if (randomDir == 1) {
        if (randomY + shipLengths[k] > 9) {
          randomY = Math.floor(Math.random() * 5)
        }
        console.log(`shipLength: ${shipLengths[k]}, randomX: ${randomX}, randomY: ${randomY}, randomDir: ${randomDir}`)
        for(let j = randomY; j < randomY + shipLengths[k] ; j++) {
          enemyBoard[j][randomX] = 1
        }
      }

    }
    
  }
  

  

  return (
    <div className='main d-flex flex-column align-items-center mx-3'>
      <div className='display-3'>React Battleship</div>
      <div className="row w-100 d-flex flex-row mt-5">
        <div className='col-1 d-flex flex-column'>
          <div><div className='empty legend-square'></div> Empty</div>
          <div><div className='ship legend-square'></div>  Part of ship  </div>
          <div><div className='sunken legend-square'></div> Sunken part</div>
          <div><div className='missed legend-square'></div> Missed shot</div>
        </div>
        <div className="col-10 d-flex flex-row">
          <div className='d-flex flex-column align-items-center '>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='display-5'>You</div>
              <div className='count-div text-danger d-flex flex-column justify-content-center align-items-center border rounded'>score: {hitCount}</div>
            </div>
            <BoardAI/>
          </div>
          <div className='w-25 d-flex flex-column justify-content-center align-items-center'>
              { running ? message  : ( win ? 'You won!':
              <div className='instructions'>
                Instructions: take shots until you sink all of your enemy's ships. The first player to make 18 correct shots wins!

              </div>  )}
              {<div className='restart-btn btn bg-danger' onClick={handleRestart}>{ running ? 'restart' : ( win ? 'restart' : 'start')}</div>}
          </div>
          <div className='d-flex flex-column align-items-center'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='display-5'>Computer AI</div>
              <div className='count-div text-danger d-flex flex-column justify-content-center align-items-center border rounded'>score: {hitCountAI}</div>
            </div>
            
            <Board fireTorpedo={fireTorpedo}/>
          </div>
        </div>
        <div className='col-1' ></div>
          

      </div>
      <div className='display-3'>{win ? 'Victory!' : ''}</div>
      <div className='display-3'>{loose ? 'Defeat!' : ''}</div>
    </div>
  )
}

export default App
