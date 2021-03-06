import React, { useState } from 'react';
import { Square2 } from "./Square2"
import './Board.css'
import { useSelector } from 'react-redux';
import  ResetButton  from './ResetButton';

export default function Board() {
    const boardState = useSelector((state) => state.game)
    boardState.normalPlay = false  

    let winningpharse = null
    const playerBoardComponent = [];
    for (let i = 0; i < boardState.robotMap.length; i++) {
        let row = boardState.robotMap[i];
        for (let j = 0; j < row.length; j++) {
            playerBoardComponent.push((<Square2 symbol={boardState.robotMap[i][j]} x={i} y={j} />))
        }
        if (boardState.robot_shipleft === 0){
            winningpharse = "Congraduation, you won!"
        }
    }
    return (
        <div class = "container">
            <h1>{boardState.blackBox}</h1>
            <div class = "display-2 text-danger">
            {winningpharse}
            </div>
            <div class = "row mt-5">
                <div id="board" class= "justify-content-center">
                {playerBoardComponent}
                </div>
            </div>
            <ResetButton text = "reset" />
        </div>
    )
}