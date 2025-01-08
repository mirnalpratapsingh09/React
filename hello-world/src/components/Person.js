import React from "react";

function Person({person}) {
    
    return (
        <>
            <h2>
                I am {person.name} a.k.a {person.heroName} and have the power of {person.skill}.
            </h2>
        </>
    )
}

export default Person