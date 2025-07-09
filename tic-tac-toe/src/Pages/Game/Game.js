import Board from '../../Components/Board/Board.js'
import { useSearchParams } from 'react-router-dom'
import Player from '../../Components/Player/Player.js';
import { useState } from 'react';

export default function Game(){
    const [searchParams] = useSearchParams();
    const player1Name = searchParams.get('player1');
    const [player1PointsState, setPlayer1PointsState] = useState(0)
    const player2Name = searchParams.get('player2');
    const [player2PointsState, setPlayer2PointsState] = useState(0)
    const boardLength = searchParams.get('board-length');
    return (
        <div className='flex flex-col items-center justify-items-center min-h-screen'>
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Tic-Tac-Toe</h1>
            <div className='flex justify-between w-96'>
                <Player name={player1Name} points={player1PointsState}/>
                <Player name={player2Name} points={player2PointsState}/>
            </div>
            <div className=''>
                <Board 
                    size={boardLength*200} 
                    length={boardLength}
                    onPlayer1Win={() => setPlayer1PointsState(player1PointsState+1)}
                    onPlayer2Win={() => setPlayer2PointsState(player2PointsState+1)}
                />
            </div>
        </div>
    )
}