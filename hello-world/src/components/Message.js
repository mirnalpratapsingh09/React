import React,{Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thnaks for clicking me'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click me </button>
            </div>
        ) 
        
    }
}

export default Message
