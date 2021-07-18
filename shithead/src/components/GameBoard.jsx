import React, {useEffect} from 'react'
import Card from "./Card"
import CardHolder from './CardHolder'
import CardPosition from './CardPosition'
import { moveCard } from './Game'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function renderCardHolder(i, cardPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <CardPosition x={x} y={y}>
        {renderCard(x, y, cardPosition)}
      </CardPosition>
    </div>
  )
}

function renderPiece(x, y, [cardX, cardY]) {
  if (x === cardX && y === cardY) {
    return <Card />
  }
}

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
      <DndProvider backend={HTML5Backend}>
        <div onClick={() => handleCardClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
          <CardHolder black={black}>{card}</CardHolder>
        </div>
        </DndProvider>
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
