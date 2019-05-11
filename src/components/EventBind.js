import React, { Component } from 'react'

class EventBind extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: 'Hi'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Good Bye my dear friend'
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
            
        )
    }
}

export default EventBind;