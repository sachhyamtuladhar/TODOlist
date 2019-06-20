import React from 'react'

export default function Header() {
    return (
        <header style={headStyle}>
            <h1>TODO List</h1>
        </header>
    )
}

const headStyle = {
    background: '#4b767f',
    color: '#fff',
    textAlign: 'center',
    padding: '6px 1px',
    fontFace: 'Consolas'
}
