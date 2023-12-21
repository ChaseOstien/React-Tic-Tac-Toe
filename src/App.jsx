import { useState } from 'react'
import './App.css'
import Board from './components/Board'

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
      // TODO
      setHistory([...history, nextSquares]);
      setXIsNext(!xIsNext);
    }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>
          {/*ToDo*/}
        </ol>
      </div>
    </div>
  )
}


