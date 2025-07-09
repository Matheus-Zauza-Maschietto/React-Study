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

    return (
        <div className='flex flex-col items-center justify-items-center min-h-screen'>
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Tic-Tac-Toe</h1>
            <div className='flex justify-between w-96'>
                <Player name={player1Name} points={player1PointsState}/>
                <Player name={player2Name} points={player2PointsState}/>
            </div>
            <div className=''>
                <Board size={600}/>
            </div>
        </div>
    )
}