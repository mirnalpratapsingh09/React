import React,{Component} from "react";

class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state={
            isLoggedIn: false
        }
    }


    render(){

        return(
            this.state.isLoggedIn?
            (<div>Welcome Habibi
                <button>Sign In</button>
            </div>) :
            (<div>Welcome Guest
                <button>Sign Up</button>
            </div>)
        )


        // let message
        // if(this.state.isLoggedIn){
        //     message= <div>Welcome Habibi</div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // ) 


        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Habibi</div>
        //     )
        // }

        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return(
        //     <div>
        //         <div>Welcome habibi</div> 
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting