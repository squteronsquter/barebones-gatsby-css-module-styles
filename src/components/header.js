import React from 'react'
import { Link } from 'gatsby'

export default function header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sassy">Sassy</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            
        </nav>
    )
}
