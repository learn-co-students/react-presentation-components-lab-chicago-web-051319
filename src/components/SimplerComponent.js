// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {
    
    return (
        <div style={{border: 'solid'}} onClick={props.handleClick}>
            <p>'I am just happy.'</p>
        </div>
    )
}

export default SimplerComponent