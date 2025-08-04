import React from 'react'
import { useContext, createContext } from 'react'

export const nameContext = createContext();



export const Child1 = () => {
    const name = useContext(nameContext)
    return (
        <div>Hello,{name}</div>
    )
}

export const Child2 = () => {
    const name = useContext(nameContext)
    return (
        <div>Hello,{name}</div>
    )
}