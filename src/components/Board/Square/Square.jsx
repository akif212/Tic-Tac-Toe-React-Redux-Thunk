import React from 'react'
import{connect} from 'react-redux'
import Player1 from './Player1/Player1.jsx'
import Player2 from './Player2/Player2.jsx'

import {drawXAction,drawOAction} from '../../../actions/boardActions.js';
import {toggleTurnAction} from '../../../actions/playerActions.js'

const Square = (props) => {
    const {symbol,index,draw, players, board,toggleTurn,checkResult}=props
    const disabled=symbol?'disabled':''
    return (
        <div className={`cell `+disabled} onClick={()=>draw(board,players,index).then(()=>{toggleTurn(); })}>
            {symbol?(symbol==='X'?<Player1/>:<Player2/>):''}
        </div>
    )
}

const mapStateToProps=({board,players})=>({board,players})

const mapDispatchToProps=dispatch=>({
    draw:(board,players,cellIndex)=>{
        if(!board[cellIndex]){
            if(players[players.turn]==='X'){
               return dispatch(drawXAction(cellIndex))
                    }
                    else{   
                return dispatch(drawOAction(cellIndex))
                    }

                    
            }
        },
        toggleTurn:()=>dispatch(toggleTurnAction())
            
})

export default connect(mapStateToProps,mapDispatchToProps)(Square)
 