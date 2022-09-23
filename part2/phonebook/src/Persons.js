const Person = ({person}) => <ul>{person.name} {person.number}</ul>

const Persons = (props) => {
    
    const {personsToShow} = props
    // console.log(personsToShow)

    return (
        <div>
            {personsToShow.map(person => <Person key={person.name} person={person} />)}
        </div>
    )
}

export default Persons