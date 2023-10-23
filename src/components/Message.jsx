import React, {Component} from "react";

class Message extends Component {
    constructor() {
        super() 
        this.state = {
            text: "WAGWAN??"
        }
    }
    
  changeMessage() {
    this.setState({
        text: "I'm Good Bruv!!"
        
    }) 
        
    
  }

    render() {
        return(
            <div>
                <p>{this.state.text}</p>
                <button onClick={() => this.changeMessage()}>Press me</button>
            </div>
        ) 
    }
}

export default Message