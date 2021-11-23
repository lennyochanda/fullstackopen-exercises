const AddPersonForm = ({ addContact, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <div>
      <form onSubmit={ addContact }>
        <div>
          name:
          <input value={ newName } onChange={ handleNameChange } />
        </div>

        <div>
          number:
          <input value={ newNumber } onChange={ handleNumberChange } />
        </div>

        <button type="submit">save</button>
      </form>
    </div>
  )
}


export default AddPersonForm
