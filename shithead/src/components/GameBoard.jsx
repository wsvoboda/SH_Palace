import React from 'react'
import Deck from "../deck"

export default function GameBoard() {
    const deck = new Deck()
    deck.shuffle()
    console.log(deck.cards)
    return (
        <div>
            
        </div>
    )
}
