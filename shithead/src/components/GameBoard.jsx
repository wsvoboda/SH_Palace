import React, {useEffect} from 'react'
import Card from "./Card"
import CardHolder from './CardHolder'
import { moveCard } from './Game'
import { useDrag } from 'react-dnd'
import Deck from "../deck"

// const CARD_VALUE_MAP = {
//     "2": 2,
//     "3": 3,
//     "4": 4,
//     "5": 5,
//     "6": 6,
//     "7": 7,
//     "8": 8,
//     "9": 9,
//     "10": 10,
//     J: 11,
//     Q: 12,
//     K: 13,
//     A: 14
//   }

// const computerCardSlot = document.querySelector(".computer-card-slot")
// const playerCardSlot = document.querySelector(".player-card-slot")
// const computerDeckElement = document.querySelector(".computer-deck")
// const playerDeckElement = document.querySelector(".player-deck")
// const text = document.querySelector(".text")

// let playerDeck, computerDeck, inRound, stop

// document.addEventListener("click", () => {
//   if (stop) {
//     startGame()
//     return
//   }

//   if (inRound) {
//     cleanBeforeRound()
//   } else {
//     flipCards()
//   }
// })

// function startGame() {
//   const deck = new Deck()
//   deck.shuffle()

//   const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
//   playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
//   computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
//   inRound = false
//   stop = false

//   cleanBeforeRound()
// }

// function cleanBeforeRound() {
//   inRound = false
//   computerCardSlot.innerHTML = ""
//   playerCardSlot.innerHTML = ""
//   text.innerText = ""

//   updateDeckCount()
// }

// function flipCards() {
//   inRound = true

//   const playerCard = playerDeck.pop()
//   const computerCard = computerDeck.pop()

//   playerCardSlot.appendChild(playerCard.getHTML())
//   computerCardSlot.appendChild(computerCard.getHTML())

//   updateDeckCount()

//   if (isRoundWinner(playerCard, computerCard)) {
//     text.innerText = "Win"
//     playerDeck.push(playerCard)
//     playerDeck.push(computerCard)
//   } else if (isRoundWinner(computerCard, playerCard)) {
//     text.innerText = "Lose"
//     computerDeck.push(playerCard)
//     computerDeck.push(computerCard)
//   } else {
//     text.innerText = "Draw"
//     playerDeck.push(playerCard)
//     computerDeck.push(computerCard)
//   }

//   if (isGameOver(playerDeck)) {
//     text.innerText = "You Lose!!"
//     stop = true
//   } else if (isGameOver(computerDeck)) {
//     text.innerText = "You Win!!"
//     stop = true
//   }
// }

// function updateDeckCount() {
//   computerDeckElement.innerText = computerDeck.numberOfCards
//   playerDeckElement.innerText = playerDeck.numberOfCards
// }

// function isRoundWinner(cardOne, cardTwo) {
//   return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
// }

// function isGameOver(deck) {
//   return deck.numberOfCards === 0
// }

function handleCardClick(toX, toY) {
  moveCard(toX, toY)
}

function renderCard(i, cardPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isCardHere = x === cardPosition[0] && y === cardPosition[1]
    const black = (x + y) % 2 === 1
    const card = isCardHere ? <Card /> : null
  
    return (
        <div onClick={() => handleCardClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
          <CardHolder black={black}>{card}</CardHolder>
        </div>
      )
  }

export default function GameBoard({ cardPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(renderCard(i, cardPosition))
    }
   
    return (
        <div
        style={{
          width: "100vw",
          height: "100vh",
          display: 'flex',
          flexWrap: 'wrap',
          border: "1px solid black"
        }}
      >
        {squares}
      </div>
    )
}
