import React,{Fragment} from 'react'
import './Board.css'
import {connect} from 'react-redux'
import Square from './Square/Square.jsx'
import Summary from './Summary/Summary.jsx'

const Board = (props) => {

    const {board}=props
    
    return (
        <Fragment>
        <div id="board" className="mt-4 d-flex flex-wrap">
            {
                board.map((symbol,i)=><Square key={i} index={i} symbol={symbol}/>)
            }
        </div>
        <Summary/>
        </Fragment>
    )
}

export default connect(({board})=>({ board}))(Board);
