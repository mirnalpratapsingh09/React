import React from "react";

const Hello = ()=>{
    return(
        <div className='dummyClass'>
            <h1>This is jsx learning</h1>
            <marquee><button>This is a button shaped spaceship</button></marquee>
        </div>
    )

    // return React.createElement('div',null,'Hello World')

   // return React.createElement('div',{id:'Hello', className:'dummyClass'},React.createElement('h1',null,'Hello World'))
}

export default Hello