import React from 'react'
import Square from '../Square/Square'
import { move } from './Game'
import './Promote.css'
const promotionPieces = ['r', 'n', 'b', 'q']

export default function Promote({promotion:{from, to, color}}){
    return(
        <div className="board">
            {promotionPieces.map((p, i)=>(
               
                <div key={i} className="promote-square">
                    <Square black={i % 3 === 0}>
                        <div className='piece-container' onClick={ () => move(from, to, p)}>
                            <img src={require(`../Piece/assets/${p}_${color}.png`).default} alt="" className='piece cursor-pointer ' />
                        </div>
                    </Square>
                </div>
            ))}
        </div>
    )
}
