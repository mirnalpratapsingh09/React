import React,{Component} from "react";

class Counter extends Component{
    
    constructor(props) {
        super(props)

        this.state={
            count: 0
        }
    }

    increment(){
        
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // ()=> {
        //     console.log('Callback value', this.state.count)
        // }
        // )

        console.log(this.state.count)

        this.setState(prevState => ({
            count: prevState.count + 1
        }))

        // console.log(this.state.count)
        // this.setState((prevState, props) => ({
        //     count: prevState.count + props.addValue
        // }))
    }

    
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render(){
        return (
            <div>
                <div> Count - {this.state.count} </div>
                <button onClickCapture={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter