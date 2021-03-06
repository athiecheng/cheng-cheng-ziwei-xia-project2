// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    
    // const [state, setState] = useState(props.symbol);
    let borderColor1 = 'purpleBorder';
    
    
    if (symbol === 'X') {
        borderColor1 = 'blackfill';
    } 
    else if (symbol === 'B') {
        borderColor1 = 'bluefill';
    }
    else if (symbol === 'R') {
        borderColor1 = 'redfill';}
    

    return (
        <div  id="square" class={borderColor1}>
    </div>);
}

