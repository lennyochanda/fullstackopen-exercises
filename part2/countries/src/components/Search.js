const Search = ({ keyword, clearInput, handleSearchInput }) => {
  return (
    <div>
      <form>
      	<div>
      	  Find Countries:
          <input value={ keyword } onChange={ handleSearchInput } />
          <button type="button" onClick={ clearInput } >clear</button>
      	</div>
      </form>
    </div>
  )
}

export default Search
