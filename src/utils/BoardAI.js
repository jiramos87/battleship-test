const BoardAI = (props) => {
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
                        <div className='square empty' id={`aisquare-${elem[1]}-${elem[0]}`}></div>
                    )}))}
        )
  
    return(
      <div className='board' id="player-board">
        {board}
      </div>
    )
  }

export default BoardAI