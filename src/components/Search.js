import React from "react";

function Search({ onSearch }) {

    return (
        <div className="search">
            <input
                className="form-control"
                onChange={(e) => onSearch(e)}
                placeholder="Search text..."
            />
        </div>
    );
}

export default Search;
