function FilterBar({ allHandler, activeHandler, inActiveHandler }) {
    return (
        <div className="filter-bar">
            <h2>Extensions List</h2>
            <div className="filter-buttons">
                <button onClick={allHandler}>All</button>
                <button onClick={activeHandler}>Active</button>
                <button onClick={inActiveHandler}>Inactive</button>
            </div>
        </div>
    );
}

export default FilterBar;