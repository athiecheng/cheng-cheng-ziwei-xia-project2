import React, { useState } from 'react';
import { Square } from "./Square"
import { Square2 } from './Square2';
import  ResetButton  from './ResetButton';
import PlayButton from './playButton';
import './Board.css';
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game)
    boardState.normalPlay = true

    const playerBoardComponent = [];
    let winningconponent = null
    for (let i = 0; i < boardState.boxMap.length; i++) {
        let row = boardState.boxMap[i];
        for (let j = 0; j < row.length; j++) {
            playerBoardComponent.push((<Square symbol={boardState.boxMap[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
        if (boardState.robot_shipleft=== 0){
            winningconponent = "human win";
        }
    }
    
    const robotBoardComponent = [];
    for (let i = 0; i < boardState.robotMap.length; i++) {
        let row = boardState.robotMap[i];
        for (let j = 0; j < row.length; j++) {
            robotBoardComponent.push((<Square2 symbol={boardState.robotMap[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
        if (boardState.human_shipleft=== 0){
            winningconponent = "robot win";
        }
    }
    
    return (
        <div className = "play">
            
            <h1>{boardState.blackBox}</h1>
            {/* <div class="w-100 p-3" style="background-color: dark blue;"> */}
            {winningconponent}
            {/* </div> */}
            <div class = "container-fluid">
                <div class = "row mt-5">
                    <div id="board" class = "col-md-6 col-sm-6 justify-content-center">
                    {playerBoardComponent}
                    {boardState.human_shipleft + " ships left"}
                    </div>

                    <div id = "board" class = "col-md-6 col-sm-6 justify-content-center">
                    {robotBoardComponent}
                    {boardState.robot_shipleft + " ships left"}
                    
                    </div>
                </div>
                <ResetButton text = "reset" />
            </div>
            
            
         
        </div>
    )
}

