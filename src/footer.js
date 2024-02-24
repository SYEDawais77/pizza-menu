import React from 'react'

export default function Footer() {
    
    const d = new Date().toLocaleTimeString();
    return (
        <footer className='footer'>
            <h2>{d} We are Open</h2>
        </footer>
    )
}
