import React, {Component} from "react"

export class EventBind extends Component{

    constructor(props){
        super(props)
        this.state={
            message: 'Hello'
        }
        // this.clickHandler= this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message:'GoodBye'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>

                {/* Binding in render method
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Binding using arrow functions in render method
                <button onClick={()=>this.clickHandler()}>Click</button>  */}

                {/* Binding in constructor method
                <button onClick={this.clickHandler}>Click</button>  */}

                Binding using Arrow function in constructor
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind