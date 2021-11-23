const Filter = ({ keyword, handleFilterInput }) => {
  return (
    <div>
      <form>
        <div>
          filter by name:
          <input value={ keyword } onChange={ handleFilterInput }/>
        </div>
      </form>
    </div>
  )
}


export default Filter
