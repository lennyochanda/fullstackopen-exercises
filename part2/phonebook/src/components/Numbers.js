const Numbers = ({ keyword, contacts, deleteContact }) => {
  return (
    <div>
      <ul>
      {
        contacts.filter(contact =>
          contact.name
            .toLowerCase()
            .includes(keyword.toLowerCase()))
            .map(contact => <li key={contact.id}>
                          {contact.name}:
                          {contact.number}
                          <button type="button" onClick={ () =>  deleteContact(contact.id, contact.name) }>
                            delete
                          </button>
                        </li>)
      }
      </ul>
    </div>
  )
}


export default Numbers
