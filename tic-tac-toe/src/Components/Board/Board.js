import './Board.css';
import Square from '../Square/Square';
import X from '../X/X';
import { useState } from 'react';
import O from '../Circle/O';
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
        }

        setState({
            board: state.board,
            nextComponentIsX: !state.nextComponentIsX,
            ended: state.ended,
            winnerComponent: nextComponent
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
                const element = state.board[i][j];
                if(element == componentToCheck) counter+=1;
                else {
                    counter = 0;
                    break
                }
                if(counter == state.board.length) return true;
            }
        }
    }

    function isVerticalVictory(componentToCheck){
        let counter = 0;
        for (let i = 0; i < state.board.length; i++) {
            for (let j = 0; j < state.board.length; j++) {
                const element = state.board[j][i];
                if(element == componentToCheck) counter+=1;
                else {
                    counter = 0;
                    break
                }
                if(counter == state.board.length) return true;
            }
        }
    }

    function isDiagonalVictory(componentToCheck){
        let counter = 0;
        for (let i = 0; i < state.board.length; i++) {
            const element = state.board[i][i];
            if(element == componentToCheck) counter+=1;
            else {
                counter = 0;
                break
            }
            if(counter == state.board.length) return true;
        }
        for (let i = state.board.length-1; i > 0; i--) {
            const element = state.board[i][i];
            if(element == componentToCheck) counter+=1;
            else {
                counter = 0;
                break
            }
            if(counter == state.board.length) return true;
        }
    }


    return (
        <>
            <div className='board' style={{
                    height: `${size}px`,
                    width: `${size}px`
                }}
            >
                <Square component={ state.board[0][0].component } size={squareSize} onClick={() => setSquareComponent(0, 0)}/>
                <Square component={ state.board[0][1].component } size={squareSize} onClick={() => setSquareComponent(0, 1)}/>
                <Square component={ state.board[0][2].component } size={squareSize} onClick={() => setSquareComponent(0, 2)}/>
                <Square component={ state.board[1][0].component } size={squareSize} onClick={() => setSquareComponent(1, 0)}/>
                <Square component={ state.board[1][1].component } size={squareSize} onClick={() => setSquareComponent(1, 1)}/>
                <Square component={ state.board[1][2].component } size={squareSize} onClick={() => setSquareComponent(1, 2)}/>
                <Square component={ state.board[2][0].component } size={squareSize} onClick={() => setSquareComponent(2, 0)}/>
                <Square component={ state.board[2][1].component } size={squareSize} onClick={() => setSquareComponent(2, 1)}/>
                <Square component={ state.board[2][2].component } size={squareSize} onClick={() => setSquareComponent(2, 2)}/>
            </div>
            <Victorious victoriousComponent={state.winnerComponent} />
        </>
    )
}
