import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <div>Welcome {this.props.name} a.k.a {this.props.heroName}.</div>
        
    }
}


// destructuring class
// class Welcome extends Component{
    
//     render(){
//         const {name,heroName}=this.props
//         return <div>Welcome {name} a.k.a {heroName}.</div>
        
//     }
// }
export default Welcome
