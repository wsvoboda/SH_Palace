import React from 'react'
import CardHolder from './CardHolder'
import { canMoveKnight, moveCard } from './Game'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

export default function CardPosition({ x, y, children }) {
    const black = (x + y) % 2 === 1
    return (
        <CardHolder black={black}>{children}</CardHolder>
    )
}