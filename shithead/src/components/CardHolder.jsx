import React from 'react'

export default function CardHolder({children}) {
    return (
        <div>
            <div className="player-1-home-cards">
                <div className="player1-card">{children}</div>
                <div className="player1-card">{children}</div>
                <div className="player1-card">{children}</div>
            </div>
        </div>
    )
}
