import React from 'react'
import CardHolder from './CardHolder'

export default function CardPosition({ x, y, children }) {
    const black = (x + y) % 2 === 1
    return (
        <CardHolder black={black}>{children}</CardHolder>
    )
}