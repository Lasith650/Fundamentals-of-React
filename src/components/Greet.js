import React from 'react';

const Greet =(props) => {
    return (
    <div>
    <h1>Hello {props.name} your hero is {props.heroName}</h1>
    {props.children}
    </div>
    )
}
export default Greet;