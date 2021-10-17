import React from 'react'

export default function footer(props) {
    return (
        <div>
            <p>{props.copyright} {new Date().getFullYear()}. All rights reserved by {props.madeby}</p>
        </div>
    )
}
