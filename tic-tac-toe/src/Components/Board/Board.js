import './Board.css';
import Square from '../Square/Square';
import X from '../X/X';
import { useState } from 'react';
import O from '../O/O';
import Victorious from '../Victorious/Victorious';

export default function Board({size}){
    const [state, setState] = useState({ 
        board: [
            [{checked: false, component: null}, {checked: false, component: null}, {checked: false, component: null}],
            [{checked: false, component: null}, {checked: false, component: null}, {checked: false, component: null}], 
            [{checked: false, component: null}, {checked: false, component: null}, {checked: false, component: null}]
        ],
        nextComponentIsX: true,
        ended: false,
        winnerComponent: null
    });
    
    const squareSize = size/3;
    const oComponent = (<O diameter={squareSize} />);
    const xComponent = (<X height={squareSize} />);

    function setSquareComponent(line, row){
        let currentComponentState = state.board[line][row];

        if(currentComponentState.checked || state.ended) return;
        
        const nextComponent = state.nextComponentIsX ? xComponent : oComponent;
        currentComponentState.component = nextComponent;
        currentComponentState.checked = true;

        
        if(isVictorious(nextComponent)) {
            state.ended = true;   
            state.winnerComponent = nextComponent;
        }

        setState({
            board: state.board,
            nextComponentIsX: !state.nextComponentIsX,
            ended: state.ended,
            winnerComponent: state.winnerComponent
        });
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
                    width: `${size}px`
                }}
            >
                {getBoardSquare()}
            </div>
            <Victorious victoriousComponent={state.winnerComponent} />
        </>
    )
}
