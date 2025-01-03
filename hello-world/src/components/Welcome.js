import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <div>Welcome {this.props.name} a.k.a {this.props.heroName}.</div>
        
    }
}

export default Welcome
