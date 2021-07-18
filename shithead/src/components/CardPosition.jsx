import React from 'react'
import CardHolder from './CardHolder'
import { moveCard } from './Game'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

export default function CardPosition({ x, y, children }) {
    const black = (x + y) % 2 === 1
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: () => moveCard(x, y),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), [x, y])
    
    return (
        <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
        <CardHolder black={black}>{children}</CardHolder>
        {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
        </div>
    )
}