import React from 'react'
import './FunctionalComp.css'

const zmienna = 'ZMIENNA'
export default function FunctionalComp(props) {
    return (

        <div className="func-comp">
            <h1>This is header.</h1>
            <p>This is vatiable: {zmienna}</p>
        </div>
    )
}

export const FunctionalComp2 = () => (
    <div className="func-comp">
        <h1>This is header2.</h1>
        <p>This is variable: {zmienna}</p>
    </div>
)