const Person = ({person, removePerson}) => {
    return (
        <tr>
            <td> {person.name} </td>
            <td> {person.number} </td>
            <td> <button onClick={() => removePerson(person.id)}> remove </button> </td>
        </tr>
    )
}

const Persons = (props) => {
    
    const {personsToShow, removePerson} = props

    return (
        <table>
            <tbody>
                {personsToShow.map(person => <Person key={person.id} person={person} removePerson={removePerson} />)}
            </tbody>
        </table>
    )
}

export default Persons