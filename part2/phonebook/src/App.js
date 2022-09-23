import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Persons from './Persons'

const App = () => {
  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(
      response => {
        setPersons(response.data)
      }
      )
    }, [])

  // Event handlers
  const addPerson = (event) => {
    event.preventDefault()
    if(persons.every((person) => person.name !== newName)) {
        const personObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(personObject))
    }
    else {
        alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
  }
  
  const personsToShow = nameFilter == null ? persons : persons.filter(person => 
    person.name.toLowerCase().includes((nameFilter.toLowerCase()))
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} 
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <strong>Filter </strong>
      <Filter handleNameFilter={handleNameFilter} nameFilter={nameFilter} />
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App