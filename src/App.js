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
let shotHistory = []

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
  const [ place, setPlace ] = useState(false)
  const [ positionDisplay, setPositionDisplay ] = useState('')

 

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
    placeShips()
    showPlayerShips()
    shotHistory = []
    console.log('enemyBoard', enemyBoard)
    
    playerBoard = initialPlayerBoard
    setRunning(true)
    setWin(false)
    setLoose(false)
    setMessage('Take a shot on the Computer board')
    //setMessage(null)
  }



  const placeShips = () => {
    setPlace(true)
  }

  const showPlayerShips = () => {
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

  const handlePositionDisplay = (position) => {
    setPositionDisplay(position)
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
      // console.log(x,y)
      // console.log(enemyBoard[y-1][x-1])
      if(shotHistory.includes(`${x}-${y}`)  === false) {
        if(enemyBoard[y-1][x-1] == 1) {
          setMessage('You hit a ship') 
          console.log('You hit a ship')
          setHitCount(hitCount + 1)
          
          let id = `square-${x}-${y}`
          let element = document.getElementById(id)
          element.style.backgroundColor = 'red'
          enemyBoard[y-1][x-1] = 2
          
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          
        } else if  (enemyBoard[y-1][x-1] == 0){
          setMessage('You missed the shot') 
          
          let id = `square-${x}-${y}`
          let element = document.getElementById(id)
          element.style.backgroundColor = 'white'
          enemyBoard[y-1][x-1] = 3
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        } 
        shotHistory.push(`${x}-${y}`)
        // console.log('shotHistory',shotHistory)
        console.log('end turn')
        console.log('hitCount',hitCount)
        setTimeout( () => {
            fireTorpedoAI()
          }, 900)
        if(hitCount  >= 17) {
          setMessage('You won!')
          setWin(true)
          setRunning(false)

        }
      
        if(hitCountAI  >= 17) {
          setMessage('You lost!')
          setLoose(true)
          setRunning(false)
          
        }  
      } else {
        setMessage(`you can't repeat shots`)
      }
    }

  }

  const randomEnemyBoardGen = () => {
    console.log('shipLengths length:' , shipLengths.length)
    let partsCount = 0
    let invalid = true
    while(invalid) {
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

        for(let y = 0; y < enemyBoard.length ; y++) {
          for(let x = 0; x < enemyBoard[y].length ; x++){
            if(enemyBoard[y][x] == 1) {
              partsCount++ 
            }
          }
        }
        if(partsCount >= 17) {
          invalid = false
        }

      }
    }
    
  }
  

  

  return (
    <div className='main'>
      <div className='col-9 d-flex flex-column align-items-center mx-2'>
        <div className='display-3 mb-3'>React Battleship</div>
        <div className='instructions'>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Instructions
          </button>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="modal-title display-5" id="staticBackdropLabel"><div>Instructions:</div></div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  
                  <p className='text-center'> Take shots on the Computer AI board until you sink all of your enemy's ships. The first player to make 18 correct shots wins!
                  </p>
                  <div className='d-flex flex-column legend-div'>
                    <div><div className='empty legend-square'></div> Empty</div>
                    <div><div className='ship legend-square'></div>  Part of ship  </div>
                    <div><div className='sunken legend-square'></div> Sunken part</div>
                    <div><div className='missed legend-square'></div> Missed shot</div>
                  </div>
                </div>
                <div className="modal-footer start-button d-flex justify-content-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleRestart}>Start game</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='restart-btn btn bg-danger' onClick={handleRestart}>{ running ? 'Restart' : ( win ? 'Restart' : 'Start')}</div>
          
        <div className="game-screen w-100 d-flex flex-row justify-content-between">
          <div className='player-board d-flex flex-column align-items-center justify-content-between'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='name-div display-5'>You</div>
              <div className='count-div text-danger d-flex flex-column justify-content-center align-items-center border rounded'>Score: {hitCount}</div>
            </div>
            <BoardAI/>
          </div>
          <div className='info-div d-flex flex-column align-items-center'>
            
            <div className='info-message h-50 d-flex flex-column justify-content-center mt-3 text-center'>
              { running ? message : ( win ?  
                <div>
                  <div className='display-3'>{win ? 'Victory!' : ''}</div>
                  <div className='display-3'>{loose ? 'Defeat!' : ''}</div>
                </div> 
              : '')}
              </div>
            <div className='h-50 d-flex flex-column justify-content-center align-items-center mt-5'>
            <h3>Shot position:</h3>
              <div className='pos-display border rounded text-center'>  {positionDisplay}</div>
            </div> 
        
          </div>
          <div className='enemy-board d-flex flex-column align-items-center justify-content-between'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='name-div display-5'>Computer</div>
              <div className='count-div text-danger d-flex flex-column justify-content-center align-items-center border rounded'>Score: {hitCountAI}</div>
            </div>
            
            <Board fireTorpedo={fireTorpedo} positionDisplay={handlePositionDisplay}/>
          </div>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default App
