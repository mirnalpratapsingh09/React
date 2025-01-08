import React from "react";
import Person from "./Person";

function NameList() {
    // const names=['Bruce', 'Arthur', 'Selina']
    // const nameList = names.map(name => <h2>{name}</h2>)


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
    const personList = persons.map(person => <Person key={person.id} person ={person} />)
    return (
        <>
            <p>Welcome</p>
            {personList}
        </>
    )
}

export default NameList