import React from 'react'
import "../index.css"

const Divider = ({children}) => {
    return (
        <div className="container">
            <div className="border" />
            <span className="content p-2">
                {children}
            </span>
            <div className="border" />
        </div>
    )
}

export default Divider
