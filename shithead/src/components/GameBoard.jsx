import React from 'react'
import Card from "./Card"
import CardPosition from './CardPosition'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function renderCard(x, y, [cardX, cardY]) {
  if (x === cardX && y === cardY) {
    return <Card />
  }
}

function renderCardHolder(i, cardPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <DndProvider backend={HTML5Backend}>
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <CardPosition x={x} y={y}>
        {renderCard(x, y, cardPosition)}
      </CardPosition>
    </div>
        </DndProvider>
      )
  }

export default function GameBoard({ cardPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(renderCardHolder(i, cardPosition))
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
