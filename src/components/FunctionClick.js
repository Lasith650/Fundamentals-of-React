import React from 'react'

const FunctionClick = () => {

    const clickHandler = () => {
        console.log("Button is clicked")
    }

    return(
        <button onClick={clickHandler}>Click</button>
    )
}

export default FunctionClick;