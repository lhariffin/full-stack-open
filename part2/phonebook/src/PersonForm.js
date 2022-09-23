import { useState } from 'react'

const PersonForm = (props) => {

    const {addPerson, newName, newNumber, handleNameChange, handleNumberChange} = props

    return (
        <form onSubmit={addPerson}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            name:
                        </td>
                        <td>
                            <input value={newName} onChange={handleNameChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            number:
                        </td>
                        <td>
                            <input value={newNumber} onChange={handleNumberChange}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm