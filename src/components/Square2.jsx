// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square2(props) {
    const symbol = props.symbol;
    
    
    // const [state, setState] = useState(props.symbol);
    let borderColor2 = 'purpleBorder';
    
    
    if (symbol === 'B') {
        borderColor2 = 'bluefill';
    }
    else if (symbol === 'R') {
        borderColor2 = 'redfill';}
    
    
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(
            {
                type: 'boardClick',
                x: props.x,
                y: props.y
            }
        )} id="square" class={borderColor2}>
    </div>);
}

