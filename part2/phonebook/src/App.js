import React, { useState, useEffect } from 'react'
import './App.css';
import contactService from './services/contacts.js'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import AddPersonForm from './components/AddPersonForm'


const Notification = ({ error, success }) => {
  if (error === null && success === null) {
    return null
  }
  const notification = error 
  ? <p className="error">{ error }</p>
  : <p className="success">{ success }</p>

  return notification
}


const App = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNUmber] = useState('')
  const [keyword, setKeyword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccess] = useState(null)

  useEffect(() => {
    contactService
      .getAll()
      .then(res => setContacts(res))
  }, [])


  const addContact = (e) => {
    e.preventDefault()

    const contactObject = {
      name: newName,
      number: newNumber
    }

    if (newName.length === 0 || newNumber.length === 0) {
      alert('Enter a name and number before you save!')
    }

    else if (contacts.filter(contact => contact.name === newName).length > 0) {
      if (window.confirm(`${newName} already added. Replace the number with new one?`)) {
        const oldContact = contacts.find(contact => contact.name === newName)

        contactService
          .update(oldContact.id, contactObject).then(returnedContact => {
            setSuccess(`${contactObject.name} has been updated!`)
            setContacts(contacts.map(c => c.name !== newName
              ? c
              : returnedContact))
            console.log(successMessage)
            console.log(newName)
            console.log(returnedContact)
            setTimeout(() => {
              setSuccess(null)
            }, 5000)
            setNewName('')
            setNewNUmber('')
          })
          .catch(err => {
            setErrorMessage("Error: Could not update contact!")
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNewName('')
            setNewNUmber('')
          })
      }
    }

    else {
      contactService
        .create(contactObject)
        .then(res => {
          setSuccess(`${contactObject.name} has been added!`)
          setContacts(contacts.concat(res))
          setTimeout(() => {
            setSuccess(null)
          }, 5000)
          setNewName('')
          setNewNUmber('')
        })
        .catch(() => {
          setErrorMessage(`Error adding ${contactObject.name}. Please try again!`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })  
    }
  }


  const deleteContact = (id, name) => {
    const contactName = name
    if (window.confirm(`Delete ${name}?`)) {
      return contactService
        .remove(id)
        .then(() => {
          setSuccess(`${contactName} has been removed from the server!`)
          console.log(successMessage)
          setContacts(contacts.filter(contact => contact.id !== id))
          setTimeout(() => {
            setSuccess(null)
          }, 5000)
          setNewName('')
          setNewNUmber('')
        })
        .catch(err => {
          setErrorMessage(`${contactName} was already removed from the server!`)
          console.log(errorMessage)
          setContacts(contacts.filter(c => c.id !== id))
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('')
          setNewNUmber('')
        })
    }
  }


  const handleFilterInput = (e) => {
    setKeyword(e.target.value)
  }


  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }


  const handleNumberChange = (e) => {
    setNewNUmber(e.target.value)
  }


  return (
    <div className="App">
        <h1>Phonebook</h1>
        <Notification error={ errorMessage } success={ successMessage } />
        <Filter keyword={ keyword } handleFilterInput={ handleFilterInput } />

        <h2>Add New Number</h2>
        <AddPersonForm addContact={ addContact } newName={ newName } newNumber={ newNumber } handleNameChange={ handleNameChange } handleNumberChange={ handleNumberChange }/>

        <h2>Numbers</h2>
        <Numbers contacts={ contacts } keyword={ keyword } deleteContact={ deleteContact } />
    </div>
  );
}

export default App;
