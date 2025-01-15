import React,{Component, PureComponent} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
constructor(props){
    super(props)

    this.state={
        name:'Bruce'
    }
}

componentDidMount() {
    setInterval(() => {
        this.setState({
            name:'Bruce'
        })
    },2000)
}

    render(){
        return(
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}

                <MemoComp name={this.state.name} />


            </div>
        )
    }
}

export default ParentComp