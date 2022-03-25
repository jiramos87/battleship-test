const Board = (props) => {

    const handleClick = (x,y) => {
        console.log('enemyBoard',x,y)
        props.fireTorpedo(x,y)
    }

    const handlePosition = (x,y) => {
        props.positionDisplay(`${x},${y}`)
    }
    let matrix = [
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
    for(let j = 0; j < 10 ; j++) {
        for(let i = 0; i < 10 ; i++) {
            matrix[j][i] = [i + 1, j + 1]
        }
    }

    let board = matrix.map((row) => 
                    { return (row.map((elem) => {
                        return (
                        <div className='square empty' id={`square-${elem[1]}-${elem[0]}`} onClick={() => handleClick(elem[1], elem[0])} onMouseEnter={() => handlePosition(elem[1],elem[0])}></div>
                    )}))}
        )
  
    return(
      <div className='board' id='enemy-board'>
        {board}
      </div>
    )
  }

export default Board