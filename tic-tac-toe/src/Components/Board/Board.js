import './Board.css';
import Square from '../Square/Square';
import X from '../X/X';
import { useState } from 'react';
import O from '../O/O';
import Victorious from '../Victorious/Victorious';

export default function Board({size, length, onPlayer1Win, onPlayer2Win}){
    function createBoard(){
        const board = []
        for (let i = 0; i < length; i++) {
            board.push([])
            for (let j = 0; j < length; j++) {
                board[i].push({checked: false, component: null})
            }
        }
        return board;
    }
    const [state, setState] = useState({ 
        board: createBoard(),
        nextComponentIsX: true,
        ended: false,
        winnerComponent: null
    });
    
    const squareSize = size/length;
    const oComponent = (<O diameter={squareSize} />);
    const xComponent = (<X height={squareSize} />);
    const drawComponent = (<Square onClick={() => {}} size={squareSize} component={null} />)


    function setSquareComponent(line, row){
        let currentSquare = state.board[line][row];

        if(currentSquare.checked || state.ended) return;
        
        const playedComponent = state.nextComponentIsX ? xComponent : oComponent;
        currentSquare.component = playedComponent;
        currentSquare.checked = true;

        if(isVictorious(playedComponent)) {
            if(state.nextComponentIsX) onPlayer1Win();
            else onPlayer2Win();
            setGameEnd(playedComponent)
        }
        else if(isDraw()){
            setGameEnd(drawComponent)
        }
        setState(generateState())

        if(state.ended)
            setTimeout(() => resetBoard(), 3000)
    }

    function resetBoard(){
        state.ended = false;
        state.winnerComponent = null;
        state.board = createBoard();
        setState(generateState())
    }

    function generateState() {
        return {
            board: state.board,
            nextComponentIsX: !state.nextComponentIsX,
            ended: state.ended,
            winnerComponent: state.winnerComponent
        }
    }

    function setGameEnd(componentWinner){
        state.ended = true;   
        state.winnerComponent = componentWinner;
    }

    function isDraw(){
        const allSquareIsChecked = state.board.every(p => p.every(i => i.checked))
        return allSquareIsChecked
    }

    function isVictorious(componentToCheck){
        return  isHorizontalVictory(componentToCheck) || 
                isVerticalVictory(componentToCheck) ||
                isDiagonalVictory(componentToCheck) 
        
    }

    function isHorizontalVictory(componentToCheck){
        let counter = 0;
        for (let i = 0; i < state.board.length; i++) {
            for (let j = 0; j < state.board.length; j++) {
                const element = state.board[i][j].component;
                
                if(element?.type?.name === componentToCheck?.type?.name) counter+=1;
                else break
                
                if(counter === state.board.length) return true;
            } 
            counter = 0;  
        }
    }

    function isVerticalVictory(componentToCheck){
        let counter = 0;
        for (let i = 0; i < state.board.length; i++) {
            for (let j = 0; j < state.board.length; j++) {
                const element = state.board[j][i].component;
                if(element?.type?.name === componentToCheck?.type?.name) counter+=1;
                else break
                
                if(counter === state.board.length) return true;
            }
            counter = 0;
        }
    }

    function isDiagonalVictory(componentToCheck){
        let counter = 0;
        for (let i = 0; i < state.board.length; i++) {
            const element = state.board[i][i].component;
            if(element?.type?.name === componentToCheck?.type?.name) counter+=1;
            else break
            
            if(counter === state.board.length) return true;
        }
        counter = 0;
        for (let i = 0; i < state.board.length; i++) {
            const element = state.board[state.board.length-1-i][i].component;
            if(element?.type?.name === componentToCheck?.type?.name) counter+=1;
            else break
            
            if(counter === state.board.length) return true;
        }
        counter = 0;
    }

    function getBoardSquare(){
        const squares = []
        for (let i = 0; i < state.board.length; i++) {
            for (let j = 0; j < state.board.length; j++) {
                squares.push(
                    <Square key={`${i}${j}`} component={ state.board[i][j].component } size={squareSize} onClick={() => setSquareComponent(i, j)}/>
                )
            }
        }
        return squares;
    }

    return (
        <>
            <div className='board' style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    gridTemplateColumns: `1fr `.repeat(length)
                }}
            >
                {getBoardSquare()}
            </div>
            <Victorious victoriousComponent={state.winnerComponent} />
        </>
    )
}
