import React from 'react';

const SearchApi = ({ value, onChange, onSubmit, children }) => {
    //do something
    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>SEARCH API</legend>
                <label>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                    />
                </label>
                <button type="submit" className="btn-search">
                    {children}
                </button>
            </fieldset>
        </form>
    );
};

export default SearchApi;