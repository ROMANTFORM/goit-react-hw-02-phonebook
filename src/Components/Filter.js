import React from "react";

const Filter = ({ onSearchInput }) => {
    return (
        <div>
            <h3>Find contact by name</h3>
            <label>
                <input
                    name="search"
                    type="text"
                    onChange={onSearchInput}
                ></input>
            </label>
        </div>

    )
};

export default Filter;