const Board = (props) => {

    const handleClick = (x,y) => {
      props.fireTorpedo(x,y)
    }
  
    return(
      <div className='board' id='enemy-board'>
        <div className='square empty' id="square-1-1" onClick={() => handleClick(1,1)}></div>
        <div className='square empty' id="square-2-1" onClick={() => handleClick(2,1)}></div>
        <div className='square empty' id="square-3-1" onClick={() => handleClick(3,1)}></div>
        <div className='square empty' id="square-4-1" onClick={() => handleClick(4,1)}></div>
        <div className='square empty' id="square-5-1" onClick={() => handleClick(5,1)}></div>
        <div className='square empty' id="square-6-1" onClick={() => handleClick(6,1)}></div>
        <div className='square empty' id="square-7-1" onClick={() => handleClick(7,1)}></div>
        <div className='square empty' id="square-8-1" onClick={() => handleClick(8,1)}></div>
        <div className='square empty' id="square-9-1" onClick={() => handleClick(9,1)}></div>
        <div className='square empty' id="square-10-1" onClick={() => handleClick(10,1)}></div>
        <div className='square empty' id="square-1-1" onClick={() => handleClick(1,2)}></div>
        <div className='square empty' id="square-2-2" onClick={() => handleClick(2,2)}></div>
        <div className='square empty' id="square-3-2" onClick={() => handleClick(3,2)}></div>
        <div className='square empty' id="square-4-2" onClick={() => handleClick(4,2)}></div>
        <div className='square empty' id="square-5-2" onClick={() => handleClick(5,2)}></div>
        <div className='square empty' id="square-6-2" onClick={() => handleClick(6,2)}></div>
        <div className='square empty' id="square-7-2" onClick={() => handleClick(7,2)}></div>
        <div className='square empty' id="square-8-2" onClick={() => handleClick(8,2)}></div>
        <div className='square empty' id="square-9-2" onClick={() => handleClick(9,2)}></div>
        <div className='square empty' id="square-10-2" onClick={() => handleClick(10,2)}></div>
        <div className='square empty' id="square-1-3" onClick={() => handleClick(1,3)}></div>
        <div className='square empty' id="square-2-3" onClick={() => handleClick(2,3)}></div>
        <div className='square empty' id="square-3-3" onClick={() => handleClick(3,3)}></div>
        <div className='square empty' id="square-4-3" onClick={() => handleClick(4,3)}></div>
        <div className='square empty' id="square-5-3" onClick={() => handleClick(5,3)}></div>
        <div className='square empty' id="square-6-3" onClick={() => handleClick(6,3)}></div>
        <div className='square empty' id="square-7-3" onClick={() => handleClick(7,3)}></div>
        <div className='square empty' id="square-8-3" onClick={() => handleClick(8,3)}></div>
        <div className='square empty' id="square-9-3" onClick={() => handleClick(9,3)}></div>
        <div className='square empty' id="square-10-3" onClick={() => handleClick(10,3)}></div>
        <div className='square empty' id="square-1-4" onClick={() => handleClick(1,4)}></div>
        <div className='square empty' id="square-2-4" onClick={() => handleClick(2,4)}></div>
        <div className='square empty' id="square-3-4" onClick={() => handleClick(3,4)}></div>
        <div className='square empty' id="square-4-4" onClick={() => handleClick(4,4)}></div>
        <div className='square empty' id="square-5-4" onClick={() => handleClick(5,4)}></div>
        <div className='square empty' id="square-6-4" onClick={() => handleClick(6,4)}></div>
        <div className='square empty' id="square-7-4" onClick={() => handleClick(7,4)}></div>
        <div className='square empty' id="square-8-4" onClick={() => handleClick(8,4)}></div>
        <div className='square empty' id="square-9-4" onClick={() => handleClick(9,4)}></div>
        <div className='square empty' id="square-10-4" onClick={() => handleClick(10,4)}></div>
        <div className='square empty' id="square-1-5" onClick={() => handleClick(1,5)}></div>
        <div className='square empty' id="square-2-5" onClick={() => handleClick(2,5)}></div>
        <div className='square empty' id="square-3-5" onClick={() => handleClick(3,5)}></div>
        <div className='square empty' id="square-4-5" onClick={() => handleClick(4,5)}></div>
        <div className='square empty' id="square-5-5" onClick={() => handleClick(5,5)}></div>
        <div className='square empty' id="square-6-5" onClick={() => handleClick(6,5)}></div>
        <div className='square empty' id="square-7-5" onClick={() => handleClick(7,5)}></div>
        <div className='square empty' id="square-8-5" onClick={() => handleClick(8,5)}></div>
        <div className='square empty' id="square-9-5" onClick={() => handleClick(9,5)}></div>
        <div className='square empty' id="square-10-5" onClick={() => handleClick(10,5)}></div>
        <div className='square empty' id="square-1-6" onClick={() => handleClick(1,6)}></div>
        <div className='square empty' id="square-2-6" onClick={() => handleClick(2,6)}></div>
        <div className='square empty' id="square-3-6" onClick={() => handleClick(3,6)}></div>
        <div className='square empty' id="square-4-6" onClick={() => handleClick(4,6)}></div>
        <div className='square empty' id="square-5-6" onClick={() => handleClick(5,6)}></div>
        <div className='square empty' id="square-6-6" onClick={() => handleClick(6,6)}></div>
        <div className='square empty' id="square-7-6" onClick={() => handleClick(7,6)}></div>
        <div className='square empty' id="square-8-6" onClick={() => handleClick(8,6)}></div>
        <div className='square empty' id="square-9-6" onClick={() => handleClick(9,6)}></div>
        <div className='square empty' id="square-10-6" onClick={() => handleClick(10,6)}></div>
        <div className='square empty' id="square-1-7" onClick={() => handleClick(1,7)}></div>
        <div className='square empty' id="square-2-7" onClick={() => handleClick(2,7)}></div>
        <div className='square empty' id="square-3-7" onClick={() => handleClick(3,7)}></div>
        <div className='square empty' id="square-4-7" onClick={() => handleClick(4,7)}></div>
        <div className='square empty' id="square-5-7" onClick={() => handleClick(5,7)}></div>
        <div className='square empty' id="square-6-7" onClick={() => handleClick(6,7)}></div>
        <div className='square empty' id="square-7-7" onClick={() => handleClick(7,7)}></div>
        <div className='square empty' id="square-8-7" onClick={() => handleClick(8,7)}></div>
        <div className='square empty' id="square-9-7" onClick={() => handleClick(9,7)}></div>
        <div className='square empty' id="square-10-7" onClick={() => handleClick(10,7)}></div>
        <div className='square empty' id="square-1-8" onClick={() => handleClick(1,8)}></div>
        <div className='square empty' id="square-2-8" onClick={() => handleClick(2,8)}></div>
        <div className='square empty' id="square-3-8" onClick={() => handleClick(3,8)}></div>
        <div className='square empty' id="square-4-8" onClick={() => handleClick(4,8)}></div>
        <div className='square empty' id="square-5-8" onClick={() => handleClick(5,8)}></div>
        <div className='square empty' id="square-6-8" onClick={() => handleClick(6,8)}></div>
        <div className='square empty' id="square-7-8" onClick={() => handleClick(7,8)}></div>
        <div className='square empty' id="square-8-8" onClick={() => handleClick(8,8)}></div>
        <div className='square empty' id="square-9-8" onClick={() => handleClick(9,8)}></div>
        <div className='square empty' id="square-10-8" onClick={() => handleClick(10,8)}></div>
        <div className='square empty' id="square-1-9" onClick={() => handleClick(1,9)}></div>
        <div className='square empty' id="square-2-9" onClick={() => handleClick(2,9)}></div>
        <div className='square empty' id="square-3-9" onClick={() => handleClick(3,9)}></div>
        <div className='square empty' id="square-4-9" onClick={() => handleClick(4,9)}></div>
        <div className='square empty' id="square-5-9" onClick={() => handleClick(5,9)}></div>
        <div className='square empty' id="square-6-9" onClick={() => handleClick(6,9)}></div>
        <div className='square empty' id="square-7-9" onClick={() => handleClick(7,9)}></div>
        <div className='square empty' id="square-8-9" onClick={() => handleClick(8,9)}></div>
        <div className='square empty' id="square-9-9" onClick={() => handleClick(9,9)}></div>
        <div className='square empty' id="square-10-9" onClick={() => handleClick(10,9)}></div>
        <div className='square empty' id="square-1-10" onClick={() => handleClick(1,10)}></div>
        <div className='square empty' id="square-2-10" onClick={() => handleClick(2,10)}></div>
        <div className='square empty' id="square-3-10" onClick={() => handleClick(3,10)}></div>
        <div className='square empty' id="square-4-10" onClick={() => handleClick(4,10)}></div>
        <div className='square empty' id="square-5-10" onClick={() => handleClick(5,10)}></div>
        <div className='square empty' id="square-6-10" onClick={() => handleClick(6,10)}></div>
        <div className='square empty' id="square-7-10" onClick={() => handleClick(7,10)}></div>
        <div className='square empty' id="square-8-10" onClick={() => handleClick(8,10)}></div>
        <div className='square empty' id="square-9-10" onClick={() => handleClick(9,10)}></div>
        <div className='square empty' id="square-10-10" onClick={() => handleClick(10,10)}></div>
      </div>
    )
  }

export default Board