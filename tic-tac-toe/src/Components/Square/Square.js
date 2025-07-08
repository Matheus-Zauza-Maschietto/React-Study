import './Square.css';
import { useState } from 'react';

export default function Square({component, size, onClick}){
    return (
        <button className="square" style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
            onClick={onClick}
        >
            {
                component
            }
        </button>
    );
}
