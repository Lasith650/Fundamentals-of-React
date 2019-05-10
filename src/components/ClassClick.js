import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log("You have clicked on click Me")
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick;