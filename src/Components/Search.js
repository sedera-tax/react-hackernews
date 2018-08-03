import React from 'react';

const Search = ({ value, onChange, children }) => {
    //do something
    return (
        <form>
            <fieldset>
                <legend>SEARCH</legend>
                <label>
                    {children}
                    &nbsp;
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </fieldset>
        </form>
    );
}

export default Search;
