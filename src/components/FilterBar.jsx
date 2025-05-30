function FilterBar({ allHandler, activeHandler, inActiveHandler, activeButton }) {
  return (
    <div className="filter-bar">
      <h1>Extensions List</h1>
      <div className="filter-buttons">
        <button
          className={activeButton === 'all' ? 'active-button' : ''}
          onClick={allHandler}
          onMouseDown={event => event.preventDefault()}>
            All
        </button>
        <button
          className={activeButton === 'active' ? 'active-button' : ''}
          onClick={activeHandler}
          onMouseDown={event => event.preventDefault()}>
            Active</button>
        <button
          className={activeButton === 'inactive' ? 'active-button' : ''}
          onClick={inActiveHandler}
          onMouseDown={event => event.preventDefault()}>
            Inactive
        </button>
      </div>
    </div>
  );
}

export default FilterBar;