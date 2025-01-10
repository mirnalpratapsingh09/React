import React from "react";
import Person from "./Person";

function NameList() {
    // const names=['Bruce', 'Arthur', 'Selina']
    // const nameList = names.map(name => <h2>{name}</h2>)

    const names = ['Bruce', 'Arthur', 'Selina', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            heroName: 'Batman',
            skill: 'Wealth'
        },
        {
            id: 2,
            name: 'Arthur',
            heroName: 'Joker',
            skill: 'spontaneous'
        },
        {
            id: 3,
            name: 'Selina',
            heroName: 'Catwoman',
            skill: 'parkor'
        }
    ]
    const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <>
            <p>Welcome</p>
            {nameList}
        </>
    )
}

export default NameList