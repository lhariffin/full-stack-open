import { useState, useEffect } from 'react'
import axios from 'axios'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notifMessage, setNotifMessage] = useState({type: null, message: null})

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

  // Event handlers
  const addPerson = (event) => {
    event.preventDefault()
    if(persons.every((person) => person.name !== newName)) {
        const personObject = {
            name: newName,
            number: newNumber
        }
        personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
          })
        const notif = {
          type: 'valid',
          message: `Added ${personObject.name}`
        }
        setNotifMessage(notif)
        setTimeout(() => {
          setNotifMessage({type: null, message: null})
        }, 5000);
    }
    else {
      if(window.confirm(`${newName} is already added to the phonebook. Do you want to replace the old number with the new one?`)) {
        const person = persons.find(person => person.name === newName)
        const updatedPerson = {
          ...person,
          number: newNumber
        }
        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          })
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if(window.confirm(`Are you sure you want to remove ${person.name}?`)) {
      personService
        .remove(id)
        .then( () =>
          setPersons(persons.filter(person => person.id !== id ))
        )
    }
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
      <Notification notif={notifMessage} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} 
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <strong>Filter </strong>
      <Filter handleNameFilter={handleNameFilter} nameFilter={nameFilter} />
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App